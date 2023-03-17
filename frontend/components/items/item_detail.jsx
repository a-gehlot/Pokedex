import React from "react";
import { useParams } from "react-router-dom";

export function itemDetail (props) {
    const { itemId } = useParams()
    const itemDetails = props.item[itemId]
    console.log(props.item[itemId])
    return(
        <ul>
            <li><h3>{itemDetails.name}</h3></li>
            <li>Price: &#36;{itemDetails.price}</li>
            <li>Happiness: {itemDetails.happiness}</li>
        </ul>
    )
}