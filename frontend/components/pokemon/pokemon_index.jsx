import React, { useState, useEffect } from "react"

function PokemonIndex(props) {
    useEffect(() => {
        props.requestAllPokemon()
    }, [])

    return(
    <ul>
        {props.pokemon.map((pokemon) => {
            return (
                <div key={pokemon.name}>
                    <li>{pokemon.name}</li>
                    <li className="pokemon-index-item">
                        <img src={pokemon.imageUrl} alt={pokemon.name + "-image"} />
                    </li>
                </div>
            )
        })}
    </ul>)
}

export default PokemonIndex