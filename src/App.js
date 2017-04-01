import React, {Component} from 'react';
import './App.css';
import ImdbSearch from './lib/ui/components/imdb-search.react';

class App extends Component {

	render() {
		return (
			<div className="App">
				<ImdbSearch />
			</div>
		);
	}
}

export default App;
