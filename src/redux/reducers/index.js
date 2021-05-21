import {combineReducers} from 'redux';
import {mainReducer} from "./main";
import {cardsReducer} from "./cards";

export const rootReducer = combineReducers({
  main: mainReducer,
  cards: cardsReducer,
});
