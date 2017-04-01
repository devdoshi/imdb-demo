class SearchApiUrls {
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
	}

	search(seriesName) {
		return `${this.baseUrl}/search/${encodeURIComponent(seriesName)}`;
	}
}

class SearchApiClient {
	constructor(baseUrl) {
		this.urls = new SearchApiUrls(baseUrl);
	}

	fetchEpisodesForSeries(seriesName) {
		const url = this.urls.search(seriesName);
		return window
			.fetch(url)
			.then(response => response.json());
	}
}

export {
	SearchApiClient
}