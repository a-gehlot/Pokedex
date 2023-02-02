import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { selectPokemonMoveNames } from "../../reducers/selectors";

export function pokemonDetail (props) {
    const { id } = useParams()
    const items = Object.values(props.state.entities.items)
    const moves = selectPokemonMoveNames(props.state)
    const thisPokemon = props.state.entities.pokemon[id]
    

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
                    <li><h2>{thisPokemon.name}</h2></li>
                    <li>Type: {thisPokemon.pokeType}</li>
                    <li>Attack: {thisPokemon.attack}</li>
                    <li>Defense: {thisPokemon.defense}</li>
                    <li>Moves: {moves.join(', ')}</li>
                </ul>
                <section className="toys">
                    <h3>Items</h3>
                    <ul className="toy-list">
                        {items.map(item => <li key={item.name}><img src={item.imageUrl} alt={item.name} /></li>)}
                    </ul>
                </section>
            </section>
        )
    }

}
