import React from "react";

const Greet = ({name, heroName}) => {
    //const {name, heroName} = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    );
};

export  default Greet;

//export const Greet = props => {return <h1>Hello {props.name}</h1>;}