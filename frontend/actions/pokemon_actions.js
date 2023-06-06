import * as APIUtil from '../util/api_util'

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"
export const RECEIVE_ONE_POKEMON = "RECEIVE_ONE_POKEMON"
export const RECEIVE_POKEMON_ERRORS = "RECEIVE_POKEMON_ERRORS"
export const START_LOADING_ALL_POKEMON = "START_LOADING_ALL_POKEMON"
export const START_LOADING_ONE_POKEMON = "START_LOADING_ONE_POKEMON"

export const receiveAllPokemon = pokemon => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
})

export const receiveOnePokemon = payload => ({
    type: RECEIVE_ONE_POKEMON,
    payload
})

export const receivePokemonErrors = errors => ({
    type: RECEIVE_POKEMON_ERRORS,
    errors
})

export const startLoadingAllPokemon = () => ({
    type: START_LOADING_ALL_POKEMON,
})

export const startLoadingOnePokemon = () => ({
    type: START_LOADING_ONE_POKEMON,
})

export const requestAllPokemon = () => (dispatch) => {
    dispatch(startLoadingAllPokemon())
    APIUtil.fetchAllPokemon().then(
        (pokemon) => dispatch(receiveAllPokemon(pokemon))
    )
}

export const requestSinglePokemon = (id) => (dispatch) => {
    dispatch(startLoadingOnePokemon());
    APIUtil.fetchPokemon(id).then(
        (payload) => (dispatch(receiveOnePokemon(payload)))
    )
}

export const requestUpdatePokemon = (pokemon) => (dispatch) => (
    APIUtil.updatePokemon(pokemon).then(
        (payload) => {(dispatch(receiveOnePokemon(payload)))
            return payload
        }, (error) => {(dispatch(receivePokemonErrors(error.responseJSON)))}
    )
)

export const createNewPokemon = (pokemon) => (dispatch) => (
    APIUtil.createPokemon(pokemon).then(
        (payload) => {(dispatch(receiveOnePokemon(payload)))
            return payload
        }, (error) => {(dispatch(receivePokemonErrors(error.responseJSON)))}
    )
)