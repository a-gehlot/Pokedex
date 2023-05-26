import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from "../actions/pokemon_actions";

const itemsReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_ONE_POKEMON:
            return Object.assign({}, action.payload.items)
        default:
            return state;
    }
}

export default itemsReducer