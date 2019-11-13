import React, {Component} from 'react';
import {RoomContext} from "../context";
import Title from "./Title";
import Room from "./Room";

class FeaturedRooms extends Component {
    // get the context in the component
    static contextType = RoomContext;
    render() {
        let {featuredRooms:rooms} = this.context;
        rooms = rooms.map(room=>{
            return <Room key={room.id} room={room} />
        });
        return (
            <section className="featured-rooms">
                <Title title="Featured Rooms" />
                <div className="featured-rooms-center">
                    {rooms}
                </div>
            </section>
        );
    }
}

export default FeaturedRooms;