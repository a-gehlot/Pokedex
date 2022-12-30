import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function pokemonDetail (props) {
    const { id } = useParams()
    const items = props.state.entities.items;
    const moves = props.state.entities.moves;
    const thisPokemon = props.state.entities.pokemon[id]
    

    useEffect(() => {
        props.requestSinglePokemon(id)
    }, [])


    if (thisPokemon) {
        return(
            <ul className="pokemon-detail">
                <img src={thisPokemon.imageUrl} alt={thisPokemon.name} />
                <h1>Name: {thisPokemon.name}</h1>
            </ul>
        )
    }

}