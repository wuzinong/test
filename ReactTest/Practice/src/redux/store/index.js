import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger();

let store = createStore(
	reducers,
	applyMiddleware(
	   thunkMiddleware,
	   loggerMiddleware
	)
);

export default store;