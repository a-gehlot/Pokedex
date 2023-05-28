import * as APIUtil from '../util/api_util'

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"
export const RECEIVE_ONE_POKEMON = "RECEIVE_ONE_POKEMON"
export const RECEIVE_POKEMON_ERRORS = "RECEIVE_POKEMON_ERRORS"

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

export const requestAllPokemon = () => (dispatch) => {
    APIUtil.fetchAllPokemon().then(
        (pokemon) => dispatch(receiveAllPokemon(pokemon))
    )
}

export const requestSinglePokemon = (id) => (dispatch) => {
    APIUtil.fetchPokemon(id).then(
        (payload) => (dispatch(receiveOnePokemon(payload)))
    )
}

export const createNewPokemon = (pokemon) => (dispatch) => (
    APIUtil.createPokemon(pokemon).then(
        (payload) => {(dispatch(receiveOnePokemon(payload)))
            return payload
        }, (error) => {(dispatch(receivePokemonErrors(error.responseJSON)))}
    )
)