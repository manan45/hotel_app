import React from 'react';
import defaultBcg from '../images/defaultBcg.jpeg';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
import Room from "../components/Room";

// define the class based component of the room page
class SingleRoom extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            room_name: this.props.match.params.room_name,
            defaultBcg
        };
    }
    // set the context type
    static contextType = RoomContext;


    // JSX render function
    render() {
        const { getRoom } = this.context;
        //console.log(this.state.slug);
        const room = getRoom(this.state.room_name);
        //console.log(room);
        if (!room){
            return <div className="error">
                <h3> Room Not found in the database </h3>
                <Link to="/rooms" className="btn-primary">Get Back Rooms</Link>
            </div>
        }
        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
       const [mainImage,...defaultImages] = images;
        return(
            <>
            // use custom styled component to display dynamic images
            <StyledHero img={mainImage} >
                <Banner title={`${name} Room`}>
                    <Link className="btn-primary" to="/rooms"> Go Back to Rooms </Link>
                </Banner>
            </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                    {defaultImages.map((item, index)=>{
                        return <img key={index} src={item} name={name}/>
                    })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>
                               Details
                            </h3><br/>
                            <p>
                                {description}
                            </p>
                        </article>
                        <article className="info">
                            <h3>
                                Info
                            </h3>
                            <h6>
                                price: ${price}
                            </h6>
                            <h6>
                                size: {size} SQFT
                            </h6>
                            <h6>
                                Max Capacity: {
                                capacity > 1 ? `${capacity} people`: `${capacity} person`
                            }
                            </h6>
                            <h6>
                                {pets?`Pets Allowed`: `Pets Not Allowed`}
                            </h6>
                            <h6>
                                {console.log(breakfast)}
                                {breakfast?`Breakfast Included`: `Breakfast not included`}
                            </h6>
                        </article>
                    </div>
                </section>
                <section  className="room-extras">
                    <h6> Extras</h6>
                    <ul className="extras">
                        {extras.map((item, index)=>{
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </section>
            </>
        );
    }
}

export default SingleRoom;