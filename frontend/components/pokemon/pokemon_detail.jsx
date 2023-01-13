import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function pokemonDetail (props) {
    const { id } = useParams()
    const items = props.state.entities.items;
    const moves = props.state.entities.moves;
    const thisPokemon = props.state.entities.pokemon[id]
    console.log(moves)
    

    useEffect(() => {
        props.requestSinglePokemon(id)
    }, [id])


    if (thisPokemon) {
        return(
            <section className="pokemon-detail">
                <ul>
                    <figure>
                        <img src={thisPokemon.imageUrl} alt={thisPokemon.name} />
                    </figure>
                    <li><h2>Name: {thisPokemon.name}</h2></li>
                    <li>Type: {thisPokemon.pokeType}</li>
                    <li>Attack: {thisPokemon.attack}</li>
                    <li>Defense: {thisPokemon.defense}</li>
                </ul>
            </section>

        )
    }

}