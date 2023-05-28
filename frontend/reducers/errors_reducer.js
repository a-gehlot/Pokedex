import { RECEIVE_POKEMON_ERRORS } from "../actions/pokemon_actions";

const errorsReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_POKEMON_ERRORS:
            return Object.assign({}, action.errors)
        default:
            return state;
    }
}

export default errorsReducer;