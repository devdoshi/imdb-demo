import React from 'react';
const ImdbSearchResultListItem = ({episode}) => {
	const imdbUrl = `http://imdb.com/title/${episode.imdbid}`;
	return (
		<li>
			<a href={imdbUrl} >
				<div>{episode.name} (Season {episode.season} Episode {episode.episode})</div>
			</a>
		</li>
	)
};

export default ImdbSearchResultListItem;