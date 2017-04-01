import React, {Component} from 'react';
import FormButton from './form-button.react';
import FormTextInput from './form-text-input.react';
import ImdbSearchResultList from './imdb-search-result-list.react';
import {connect} from 'react-redux';
import {setSearchQuery, startSearch} from '../actions/imdb-actions';

class ImdbSearch extends Component {

	constructor(props) {
		super(props);
		this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
		this.handleStartSearch = this.handleStartSearch.bind(this);
	}

	render() {
		return (
			<div>
				<form>
					<FormTextInput
						value={this.props.query}
						placeholder="enter a tv series"
						onChange={this.handleSearchQueryChange}
						disabled={this.props.isSearchInProgress}
					/>
					<FormButton
						label="search"
						onClick={this.handleStartSearch}
						disabled={this.props.isSearchInProgress}
					/>
				</form>
				<div>
					{this.renderResults()}
				</div>
			</div>
		)
	}

	renderResults() {
		let contents;
		if (!this.props.query) {
			contents = 'enter a tv show name to begin';
		}
		else if (this.props.isSearchInProgress) {
			contents = 'searching...';
		}
		else if (!this.props.isQueryStale && !this.props.didSucceed) {
			contents = 'couldn\'t find any results...make sure you search for a tv series';
		}
		else if (!this.props.isQueryStale && this.props.didSucceed) {
			contents = <ImdbSearchResultList result={this.props.result} />
		}
		else {
			contents = 'hit the search button when you are ready';
		}
		return <div>{contents}</div>
	}

	handleSearchQueryChange(value) {
		this.props.dispatch(setSearchQuery(value));
	}

	handleStartSearch() {
		this.props.dispatch(startSearch(this.props.query));
		return false;
	}
}

const mapStateToProps = (state) => {
	return {
		query: state.search.query,
		result: state.search.result,
		isSearchInProgress: state.search.isSearchInProgress,
		didSucceed: state.search.didSucceed,
		isQueryStale: state.search.isQueryStale,
	};
};

export default connect(mapStateToProps)(ImdbSearch);