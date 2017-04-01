import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {reducer} from './lib/ui/reducers';

const storeFactory = (
	defaultState = {}
) => {
	return createStore(reducer, defaultState, applyMiddleware(thunkMiddleware));
};

export {
	storeFactory
}