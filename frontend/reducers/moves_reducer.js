import { RECEIVE_ONE_POKEMON } from "../actions/pokemon_actions";

const movesReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ONE_POKEMON:
            return Object.assign({}, action.payload.moves)
        default:
            return state;
    }
}

export default movesReducer;