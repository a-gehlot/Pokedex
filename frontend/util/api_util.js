export const fetchAllPokemon = () => {
    return (
        $.ajax({
            type: "GET",
            url: "/api/pokemon",
        })
    );
}

export const fetchPokemon = (id) => {
    return (
        $.ajax({
            type: "GET",
            url: `/api/pokemon/${id}`
        })
    );
}

export const createPokemon = (pokemon) => {
    return (
        $.ajax({
            type: "POST",
            url: '/api/pokemon',
            data: { pokemon }
        })
    )
}

export const updatePokemon = (pokemon) => {
    return(
        $.ajax({
            type: "PATCH",
            url: `/api/pokemon/${pokemon.id}/edit`,
            data: { pokemon }
        })
    )
}