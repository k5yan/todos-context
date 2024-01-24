import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { dbStateReducer, dbOperationsReducer } from '../reducers';
import { thunk } from 'redux-thunk';

const reducer = combineReducers({
	db: dbStateReducer,
	dbOperations: dbOperationsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
