import {applyMiddleware, createStore} from 'redux'
import {rootReducer} from './reducers';
import {logger} from "./middlewares/logger";

export const store = createStore(rootReducer, applyMiddleware(logger));
