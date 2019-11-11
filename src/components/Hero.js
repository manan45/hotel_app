/*
THis is the cover background appearing in the home page
anything inside the Hero component will act as a children of the component, you dont have to define the children when
using the component
 */
import React from 'react';
export default function Hero({children, hero}){
    return (
        // as done here the children will be anything inside the application
        <header className={hero}>
            {children}
        </header>
    );
};

Hero.defaultProps = {
    hero: "defaultHero"
};


