import { connect } from "react-redux";
import { createNewPokemon } from "../../actions/pokemon_actions";
import pokemonForm from "./pokemon_form";

const mapDispatchToProps = (dispatch) => ({
    createNewPokemon: (pokemon) => dispatch(createNewPokemon(pokemon))
})

export default connect(
    null,
    mapDispatchToProps
)(pokemonForm)