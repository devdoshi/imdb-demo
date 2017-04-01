import {imdbActionTypes} from '../constants/imdb-constants.js';
import {SearchApiClient} from '../api/clients/search-api-client';
const searchApiClient = new SearchApiClient('http://localhost:4000');

const setSearchQuery = (query) => {
	return {
		type: imdbActionTypes.SET_SEARCH_QUERY,
		query,
	};
};

const finishSearch = (result, didSucceed) => {
	return {
		type: imdbActionTypes.FINISH_SEARCH,
		result,
		didSucceed,
	};
};

const startSearch = (query) => {
	return (dispatch) => {
		dispatch({type: imdbActionTypes.START_SEARCH, query});
		return searchApiClient.fetchEpisodesForSeries(query)
			.then(json => {
				const didSucceed = true;
				dispatch(finishSearch(json, didSucceed));
			})
			.catch(() => {
				const didSucceed = false;
				dispatch(finishSearch({series:{}, episodes:[]}, didSucceed));
			});
	};
};


export {
	setSearchQuery,
	startSearch,
	finishSearch,
}