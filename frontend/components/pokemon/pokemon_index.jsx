import React, { useState, useEffect } from "react"
import { PokemonIndexItem } from "./pokemon_index_item"
import { Route, Routes } from "react-router-dom"
import PokemonDetailContainer from './pokemon_detail_container'

function PokemonIndex(props) {
    useEffect(() => {
        props.requestAllPokemon()
    }, [])

    const pokemonItems = props.pokemon.map((poke) => (
        <PokemonIndexItem key={poke.id} pokemon={poke} />
    ))

    return(
        <section className="pokedex">
            <Routes>
                <Route path="/pokemon/:id" element={<PokemonDetailContainer />}></Route>
            </Routes>
            <ul>
                {pokemonItems}
            </ul>
        </section>)

}

export default PokemonIndex