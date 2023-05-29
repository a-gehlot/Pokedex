import React, { useState, useEffect } from "react"
import { PokemonIndexItem } from "./pokemon_index_item"
import { Route, Routes } from "react-router-dom"
import PokemonDetailContainer from './pokemon_detail_container'
import PokemonFormContainer from "./pokemon_form_container"
import LoadingIcon from "./loading_icon"

function PokemonIndex(props) {
    useEffect(() => {
        props.requestAllPokemon()
    }, [])


    const pokemonItems = props.pokemon.map((poke) => (
        <PokemonIndexItem key={poke.id} pokemon={poke} />
    ))

    if (props.loading.indexLoading) {
        return (
            <LoadingIcon />
        )
    } else {
        return (
            <section className="pokedex">
                <Routes>
                    <Route path="/pokemon/:pokemonId/*" element={<PokemonDetailContainer />}></Route>
                    <Route path="/" element={<PokemonFormContainer />}></Route>
                </Routes>
                <ul>
                    {pokemonItems}
                </ul>
            </section>)
    }



}

export default PokemonIndex