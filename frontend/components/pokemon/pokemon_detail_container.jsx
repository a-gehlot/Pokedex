import { connect } from 'react-redux'
import { requestSinglePokemon } from '../../actions/pokemon_actions'
import { pokemonDetail } from './pokemon_detail'

const mapDispatchToProps = dispatch => ({
    requestSinglePokemon: (pokemonId) => dispatch(requestSinglePokemon(pokemonId))
})

const mapStateToProps = (state) => ({
    state: state,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(pokemonDetail)