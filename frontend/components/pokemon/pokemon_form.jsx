import React, {useState} from "react";
import {useNavigate} from "react-router-dom"

export default function pokemonForm(props) {

    const [state, setState] = useState({
        attack: 0,
        defense: 0,
        image_url: '',
        name: '',
        poke_type: 'fire',
        move_1: '',
        move_2: '',
    });

    const navigate = useNavigate()

    const update = (property) => {
        return ((e) => {
            let newState = Object.assign({}, state)
            newState[property] = e.target.value
            setState(newState)
        })

    }

    const errors = (errArray) => {
        if (errArray[0]) {
            return (
                <ul>
                    {Object.values(errArray).map((err) => {
                        return (<li className="error" key={err}>{err}</li>)
                    })}
                </ul>
            )
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createNewPokemon(state).then(newPokemon => {
            navigate(`pokemon/${Object.keys(newPokemon.pokemon)[0]}`)
        });
    }

    return(
        <section className="pokemon-detail">
            <form className="pokemon-form" onSubmit={handleSubmit}>
                {errors(props.errors)}
                <label htmlFor="name">Name:</label>
                <input type="text" value={state.name} onChange={update('name')} />
                <br />
                <label htmlFor="poke_type">Poke Type:</label>
                <select name="type" value={state.poke_type} onChange={update('poke_type')}>
                    {JSON.parse(window.POKEMON_TYPES).map((type) => <option value={type} key={type}>{type}</option>)}
                </select>
                <br />
                <label htmlFor="image_url">Image URL:</label>
                <input type="text" value={state.image_url} onChange={update('image_url')} />
                <br />
                <label htmlFor="attack">Attack:</label>
                <input type="number" value={state.attack} onChange={update('attack')} />
                <br />
                <label htmlFor="defense">Defense:</label>
                <input type="number" value={state.defense} onChange={update('defense')} />
                <br />
                <label htmlFor="move_1">Move 1:</label>
                <input type="text" value={state.move_1} onChange={update('move_1')} />
                <br />
                <label htmlFor="move_2">Move 2:</label>
                <input type="text" value={state.move_2} onChange={update('move_2')} />
                <br />
                <button type="submit">Submit</button>
                
            </form>
        </section>
    )
}

