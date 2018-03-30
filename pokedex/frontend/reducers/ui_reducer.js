import {
  RECEIVE_ALL_POKEMON,
  RECEIVE_SINGLE_POKEMON
} from '../actions/pokemon_actions';

const uiReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    // case RECEIVE_ALL_POKEMON:
    //   break;
    // case RECEIVE_SINGLE_POKEMON:
    //   break;
    default:
      return state;
  }
};

export default uiReducer;
