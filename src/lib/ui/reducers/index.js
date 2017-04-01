import {combineReducers} from 'redux';
import {reducer as search} from './imdb-search';

const reducer = combineReducers({search});
export {
	reducer
}