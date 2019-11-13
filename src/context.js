// context is used for to pass the data in nested components without using properties(props)

import React, {Component} from 'react';
import items from './data'; // import data from local storage

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        featuredRooms: [],
        sortedRooms: [],
        type: 'all',
        capacity:0,
        price:0,
        min_price:0,
        max_price:0,
        min_size:0,
        breakfast:false,
        pets: false
    };

    componentDidMount() {
        let rooms = this.formatData(items);
        // let ids = items.map(item=>{
        //     return item.sys.id
        // });
        // console.log(ids);
        let featuredRooms = rooms.filter(room=>room.featured === true);
        // console.log(featuredRooms);
        let maxPrice = Math.max(...rooms.map(item=>item.price));
        let size = Math.max(...rooms.map(item=>item.size));
        this.setState({
            rooms, featuredRooms, sortedRooms:rooms, price:maxPrice, max_price:maxPrice, max_size:size
        });
        // console.log(this.state);
    }


    // function to keep relevant data from the data.js file
    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            // console.log(id);
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields, images, id};
            return room;
        });
        return tempItems
    }

    // get data about the single room
    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room=> room.slug === slug);
        console.log(room);
        return room;
    };

    handleChange = event =>{
        const target= event.target;
        const value = event.type === "checkbox" ? target.checked:target.value;
        const name= event.target.name;
        this.setState({
           [name]: value
        }, this.filterRooms);
    };
    // filter for the rooms
    filterRooms = () =>{
        let {rooms, type, capacity, price, min_size, max_size, breakfast, pets} = this.state;
        let tempRooms  = [...rooms];
        capacity = parseInt(capacity);
        price = parseInt(price);
        max_size = parseInt(max_size);
        min_size = parseInt(min_size);

        // filter by room type
        if(type !== "all"){
            tempRooms = tempRooms.filter(room=>room.type === type);
        }
        // filter by room capacity
        if(capacity !== 1){
            tempRooms = tempRooms.filter(room=>room.capacity >= capacity);
        }
        //filter for the price range
        tempRooms = tempRooms.filter(room=>room.price<= price);
        //filter according to the size of the room
        tempRooms = tempRooms.filter(room=> min_size <= room.size && room.size <= max_size);

        //filter for breakfast
        if(breakfast === "on"){
            tempRooms = tempRooms.filter(room=> room.breakfast === true);
        }
        //filter for pets
        if(pets === "on"){
            tempRooms = tempRooms.filter(room=> room.pets === true);
        }
        this.setState({
            sortedRooms: tempRooms
        })
    };

    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom:this.getRoom, handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;
export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {value=> <Component {...props} context={value}/>}
        </RoomConsumer>
    }
    
}
export  { RoomProvider, RoomContext, RoomConsumer };
