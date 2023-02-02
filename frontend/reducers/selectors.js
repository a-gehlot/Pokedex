export const selectAllPokemon = (state) => {
    return(
        Object.values(state.entities.pokemon)
    )
}

export const selectPokemonMoveNames = (state) => {
    return(
        Object.values(state.entities.moves).map((val) => val.name)
    )
}