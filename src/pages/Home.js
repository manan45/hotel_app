import React from 'react';
// import the hero component from components
import Hero from "../components/Hero";
// import banner for the sub-cover
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';

export default function Home () {
    // here link will be the children of the banner
    return (
        <Hero>
            <Banner title="This is the main page" subtitle="This is the subheading of the application" >
            <Link to="/rooms" className="btn-primary">
                Our Rooms
            </Link>
            </Banner>
        </Hero>
    );
}

