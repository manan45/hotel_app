import React from 'react';
import Hero from "../components/Hero"; // import the default HERO component for rooms
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import RoomsContainer from "../components/RoomsContainer";
// make a functional component
const Rooms = () => {
    // change the property of the component
    return(
        <>
    <Hero  hero="roomsHero">
        <Banner title="Our Rooms">
            <Link to="/" className="btn-primary">
                Go Back To Home
            </Link>

        </Banner>
    </Hero>
            <RoomsContainer/>
        </>)
};



// export the function
export default Rooms;


