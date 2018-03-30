import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
    items: state.entities.items
  };
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: id => dispatch(requestSinglePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
