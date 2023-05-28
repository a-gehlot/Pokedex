import { connect } from "react-redux";
import { createNewPokemon } from "../../actions/pokemon_actions";
import pokemonForm from "./pokemon_form";

const mapStateToProps = (state) => {
    return ({errors: state.ui.errors})
}

const mapDispatchToProps = (dispatch) => ({
    createNewPokemon: (pokemon) => dispatch(createNewPokemon(pokemon))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(pokemonForm)