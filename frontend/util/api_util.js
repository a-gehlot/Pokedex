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