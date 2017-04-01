import {imdbActionTypes} from '../constants/imdb-constants';
const initialState = {
	query: '',
	result: {},
	isSearchInProgress: false,
	didSucceed: false,
	isQueryStale: false,
};
const reducer =
	(state = initialState, payload) => {
		switch (payload.type) {
			case imdbActionTypes.SET_SEARCH_QUERY:
				return {
					...state,
					query: payload.query,
					isQueryStale: true,
				};
			case imdbActionTypes.FINISH_SEARCH:
				return {
					...state,
					isSearchInProgress: false,
					result: payload.result,
					didSucceed: payload.didSucceed,
				};
			case imdbActionTypes.START_SEARCH:
				return {
					...state,
					query: payload.query,
					isSearchInProgress: true,
					isQueryStale: false,
				};

			default:
				return state;
		}
	};

export {
	reducer
}