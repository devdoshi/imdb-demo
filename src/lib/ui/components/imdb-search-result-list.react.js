import React from 'react';
import ImdbSearchResultListItem from './imdb-search-result-list-item.react';
import './imdb-search-result-list.css';

const ImdbSearchResultList = ({result}) => {
	const {series, episodes} = result;
	const episodeItems = episodes.map(episode => <ImdbSearchResultListItem episode={episode} key={episode.imdbid} />);
	return (
		<div className="imdb-search__container">
			<div className="imdb-search__series-container">
				<h1>{series.title}</h1>
				<h2>{series.description}</h2>
				<h3>{series._year_data}</h3>
				<img alt="poster" src={series.poster} />
			</div>
			{episodeItems.length === 0 ? <div>no episodes</div> : <ul>{episodeItems}</ul>}
		</div>
	)
};

export default ImdbSearchResultList;