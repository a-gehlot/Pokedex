import { START_LOADING_ALL_POKEMON, START_LOADING_ONE_POKEMON } from "../actions/pokemon_actions";
import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from "../actions/pokemon_actions";

const loadingReducer = (state = {detailLoading: false, indexLoading: false}, action) => {
    switch(action.type) {
        case START_LOADING_ALL_POKEMON:
            return (Object.assign({}, {indexLoading: true}))
        case START_LOADING_ONE_POKEMON:
            return (Object.assign({}, {detailLoading: true}))
        case RECEIVE_ALL_POKEMON:
            return (Object.assign({}, {indexLoading: false}))
        case RECEIVE_ONE_POKEMON:
            return (Object.assign({}, {detailLoading: false}))
        default:
            return state
    }
}

export default loadingReducer