import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers'


let store = createStore(
	reducers
);

export default store;