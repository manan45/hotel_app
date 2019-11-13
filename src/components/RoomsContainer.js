import React from 'react';
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import {withRoomConsumer} from "../context";

function RoomContainer({context}) {
     const {sortedRooms, rooms } = context;
    return (<div>
        <RoomsFilter sorted={rooms}/>
        <RoomsList rooms={sortedRooms}/>
        </div>)
 }

export default withRoomConsumer(RoomContainer);

// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import {RoomConsumer} from "../context";
//
//
// export default function RoomsContainer(){
//    return(
//        <RoomConsumer>
//            {
//                (value) => {
//                    const {sortedRooms, rooms} = value;
//                    console.log(sortedRooms);
//                    console.log(rooms);
//                    return (<div>
//                        hello room container
//                        <RoomsFilter sorted={rooms}/>
//                        <RoomsList rooms={rooms}/>
//                    </div>)
//                }
//            }
//        </RoomConsumer>
//    )
// }