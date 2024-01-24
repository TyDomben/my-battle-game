import { createStore, combineReducers } from 'redux';
import battleReducer from '../reducers/battleReducer';
import gameStateReducer from '../reducers/gameStateReducer';
import pokemonReducer from '../reducers/pokemonReducer';
import teamReducer from '../reducers/teamReducer';

const rootReducer = combineReducers({
  battle: battleReducer,
  gameState: gameStateReducer,
  pokemon: pokemonReducer,
  team: teamReducer
});

const store = createStore(
  rootReducer,
  // Apply middleware like Redux Thunk or Redux Saga if you're planning to use them
);

export default store;
