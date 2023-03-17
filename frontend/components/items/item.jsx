import { Link } from "react-router-dom";
import React from "react";

export function Item({itemProps}) {
    return(
        <li>
            <Link to={`/pokemon/${itemProps.pokemonId}/items/${itemProps.id}`}>
                <img src={itemProps.imageUrl} alt={itemProps.name} />
            </Link>
        </li>
    )
}