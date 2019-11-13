import React, {Component} from 'react';
import Title from "./Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free Cocktails",
                info: "Some big paragraph"
            },
            {
                icon: <FaHiking/>,
                title: "Free Hiking",
                info: "Some big paragraph"
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free Shuttle",
                info: "Some big paragraph"
            },
            {
                icon: <FaBeer/>,
                title: "Free Beer",
                info: "Some big paragraph"
            }
        ]
    };

    render() {
        // set the state of the Service component
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {/* show all the services here */}
                    {this.state.services.map((item, index) => {
                        return (<article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>)
                    } )}
                </div>
            </section>
        );
    }
}

export default Services;