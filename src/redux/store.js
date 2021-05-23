import {applyMiddleware, createStore} from 'redux'
import {rootReducer} from './reducers';
import {logger} from "./middlewares/logger";

export const store = createStore(
  rootReducer,
  (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {},
  applyMiddleware(logger)
);

store.subscribe(() => {
  localStorage['redux-store'] = JSON.stringify(store.getState());
});
