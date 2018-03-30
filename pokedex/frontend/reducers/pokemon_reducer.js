import merge from 'lodash/merge';

import {
  RECEIVE_ALL_POKEMON,
  // REQUEST_ALL_POKEMON,
  RECEIVE_SINGLE_POKEMON
} from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    // case REQUEST_ALL_POKEMON:
    // 	return action.pokemon;
    case RECEIVE_SINGLE_POKEMON:
      const newPokemon = {
        [action.payload.pokemon.id]: action.payload.pokemon
      };
      return merge({}, state, newPokemon);
    default:
      return state;
  }
};

export default pokemonReducer;
