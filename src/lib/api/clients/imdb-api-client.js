import {get} from 'imdb-api';

class ImdbApiClient {

	fetchEpisodesForSeries(seriesName, callback) {
		return get(seriesName)
			.then(series => {
				if (series.series) {
					series
						.episodes()
						.then((episodes) => {
							callback(null, {series, episodes});
						})
						.catch(() => {
							callback('episode-fetch-failure');
						});
				}
				else {
					callback('invalid-result');
				}
			})
			.catch(() => {
				callback('unknown-error');
			});
	}
}

const imdbApiClient = new ImdbApiClient();

export {
	imdbApiClient
}