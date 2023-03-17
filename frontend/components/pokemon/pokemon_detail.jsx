import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import { selectPokemonMoveNames } from "../../reducers/selectors";
import ItemDetailContainer from '../items/item_detail_container'
import { Item } from "../items/item";


export function pokemonDetail (props) {
    const { pokemonId } = useParams()
    const items = Object.values(props.state.entities.items)
    const moves = selectPokemonMoveNames(props.state)
    const thisPokemon = props.state.entities.pokemon[pokemonId]
    

    useEffect(() => {
        props.requestSinglePokemon(pokemonId)
    }, [pokemonId])


    if (thisPokemon) {
        return(
            <section className="pokemon-detail">
                <Routes>
                    <Route path="/items/:itemId" element={< ItemDetailContainer />}></Route>
                </Routes>
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
                        {items.map(item => <Item key={item.name} itemProps={item}/>)}
                    </ul>
                </section>
            </section>
        )
    }

}
