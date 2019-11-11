import React from 'react';
import Hero from "../components/Hero"; // import the default HERO component for rooms
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';

// make a functional component
const Rooms = () => {
    // change the property of the component
    return(
    <Hero  hero="roomsHero">
        <Banner title="Our Rooms">
            <Link to="/" className="btn-primary">
                Go Back To Home
            </Link>

        </Banner>
    </Hero>)
};



// export the function
export default Rooms;


