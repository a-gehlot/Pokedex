import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from "../actions/pokemon_actions";

const pokemonReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_ALL_POKEMON:
            return Object.assign({}, action.pokemon, state)
        case RECEIVE_ONE_POKEMON:
            let nextState = Object.assign({}, state);
            nextState[action.payload.pokemon.id] = action.payload.pokemon;
            return nextState;
        default:
            return state;
    }
}

export default pokemonReducer