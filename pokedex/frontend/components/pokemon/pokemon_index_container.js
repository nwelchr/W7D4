import { connect } from 'react-redux';

const mapStateToProps = state => ({
  // piece of state that container subscribes to
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: // dispatch requestAllPokemon action.
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
