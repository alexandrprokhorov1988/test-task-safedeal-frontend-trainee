import {combineReducers} from 'redux';
import {mainReducer} from './main';
import {photoGridReducer} from './photoGrid';
import {popupReducer} from './popup';

export const rootReducer = combineReducers({
  main: mainReducer,
  photoGrid: photoGridReducer,
  popup: popupReducer,
});
