import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    const cardArray = robots.map((robot, i) => {
        return <Card key={i} robot={robot}/>
    })
    return (
        <div>
            {cardArray}
        </div>
    )
}

export default CardList