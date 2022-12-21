import React from "react";
import { Link, Route } from "react-router-dom";

export function PokemonIndexItem (props) {
   return(
    <li className="pokemon-index-item">
        <Link to={`/pokemon/${props.pokemon.id}`}>
            <span>{props.pokemon.id}</span>
            <img src={props.pokemon.imageUrl} alt={props.pokemon.name} />
            <span>{props.pokemon.name}</span>
        </Link>
    </li>
   ) 
}