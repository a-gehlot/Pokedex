import React, {useState, useEffect} from "react";

export default function pokemonForm(props) {
    const TYPES = [
        'fire',
        'electric',
        'normal',
        'ghost',
        'psychic',
        'water',
        'bug',
        'dragon',
        'grass',
        'fighting',
        'ice',
        'flying',
        'poison',
        'ground',
        'rock',
        'steel'
    ]

    const [state, setState] = useState({
        attack: 0,
        defense: 0,
        image_url: '',
        name: '',
        poke_type: 'fire'
    });
    const [types, setTypes] = useState('fire')

    const update = (property) => {
        return ((e) => {
            let newState = Object.assign({}, state)
            newState[property] = e.target.value
            console.log(newState)
            setState(newState)
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createNewPokemon(state);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={state.name} onChange={update('name')} />
            </label>
            <label>
                Poke Type:
                <select name="type" value={state.poke_type} onChange={update('poke_type')}>
                    {TYPES.map((type) => <option value={type} key={type}>{type}</option>)}
                </select>
            </label>
        </form>
    )
}

