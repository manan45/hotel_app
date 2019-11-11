// functional component that will work over cover background
// if banner is inside hero banner will act as the children of the hero and anything in between Banner component will
// act as children of banner

import React from 'react';

export default function Banner({children, title, subtitle}){
    return(
        <div className="banner">
            <h1> {title} </h1>
            <div></div>
            <p> {subtitle}</p>
            {children}
        </div>
    )
}