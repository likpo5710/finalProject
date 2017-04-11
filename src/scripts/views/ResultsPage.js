import React from 'react'
import Banner from './components/banner'

import $ from 'jquery'

var SearchResultsPage = React.createClass({

	handleClick: function(eventObj) {
		eventObj.preventDefault();
		console.log('The link was clicked');
	},
	
	render: function() {
			return (
				<div className="searchListings">
					<Banner />
					<HeroCollection collection={this.props.multiCollection} />
				</div>
			)
		}
})

var HeroCollection = React.createClass({
	makeHeroes: function(model) {
		return <Hero 
				heroModel = {model}
				key={model.cid}
		/>
	},

	render: function() {
		return (
			<div>
				{this.props.collection.map(this.makeHeroes)}
			</div>
		)
	}
})

var Hero = React.createClass({
	render: function() {
		console.log(this.props.heroModel)
		// compose a string that looks like '#details/WHATEVER THE ID IS' : complete
		// console.log that string, verifying that you're creating a 
			// unique details href for each hero : complete
		// var detailsLink = `${this.props.heroModel.get('urls')[0].url}`
		var detailsLink = '#details/' + `${this.props.heroModel.get('id')}`;
		return (
			<div>
				<a href={detailsLink} onClick={this.handleClick}>
				<h3>{this.props.heroModel.get('name')}</h3>
				</a>
			</div>
		)
	}
})

// define hero component in another file
// export it

// import it into both resultspage and heroes page
// that way you write DRY code and save yourself a lot of time and trouble

export default SearchResultsPage