import React from 'react';
// import the hero component from components
import Hero from "../components/Hero";
// import banner for the sub-cover
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import Services from "../components/Services";
import Title from "../components/Title"; // import service component , only to be displayed in the home screen
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home () {
    // here link will be the children of the banner
    return (
        // for adding multiple react fragments in the app
        <React.Fragment>
            <Hero>
                <Banner title="This is the main page" subtitle="This is the subheading of the application" >
                <Link to="/rooms" className="btn-primary">
                    Our Rooms
                </Link>
                </Banner>
            </Hero>
            <Services/>
            <FeaturedRooms/>
         </React.Fragment>
    );
}

