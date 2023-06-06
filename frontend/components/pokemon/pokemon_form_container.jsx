import { connect } from "react-redux";
import { createNewPokemon, requestSinglePokemon, requestUpdatePokemon } from "../../actions/pokemon_actions";
import pokemonForm from "./pokemon_form";

const mapStateToProps = (state) => {
    return ({errors: state.ui.errors})
}

const mapDispatchToProps = (dispatch) => ({
    createNewPokemon: (pokemon) => dispatch(createNewPokemon(pokemon)),
    requestUpdatePokemon: (pokemon) => dispatch(requestUpdatePokemon(pokemon)),
    requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(pokemonForm)