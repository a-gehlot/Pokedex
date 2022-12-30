import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from "../actions/pokemon_actions";

const pokemonReducer = (state = {}, action) => {
    const nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_ALL_POKEMON:
            return Object.assign({}, action.pokemon, state)
        case RECEIVE_ONE_POKEMON:
            nextState[Object.values(action.payload.pokemon)[0].id] = Object.values(action.payload.pokemon)[0]
            return nextState;
        default:
            return state;
    }
}

export default pokemonReducer