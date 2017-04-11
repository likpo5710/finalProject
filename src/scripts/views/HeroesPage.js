import React from 'react'
import Banner from './components/banner'
import SearchResultsPage from './ResultsPage'

var HeroesPage = React.createClass({

	handleClick: function(eventObj) {
		eventObj.preventDefault();
		console.log('The link was clicked');
	},

	componentWillMount: function() {
		this.props.multiCollection.on('sync', () => {
			this.setState({
				multiCollection : this.props.multiCollection
			})
		})
	},

	getInitialState: function() {
		return {
			multiCollection: []
		}
	},

	render: function() {
		console.log(this.props.multiCollection)
		return (
			<div className="HeroesPage">
				<Banner />
				<h1>Marvel Superheroes</h1>
				<Heroes collection={this.state.multiCollection} />
			</div>
		)
	}
})

var Heroes = React.createClass({
	makeHeroes: function(model) {
		return <Hero 
				heroModel={model}
				// gives each model their own id
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
	// need to get the pictures to render. JUSTIN!!!!
	render: function() {
		console.log(this.props.heroModel)
		var imgSrc = `${this.props.heroModel.get('thumbnail').path}.${this.props.heroModel.get('thumbnail').extension}`;
		var detailsLink = '#details/' + `${this.props.heroModel.get('id')}`;
		return (
			<div>
				<a href={detailsLink} onClick={this.handleClick}>
				<img src={imgSrc} />
				<h3>{this.props.heroModel.get('name')}</h3>
				</a>
			</div>
		)
	}
})


// define hero compoentn in another file
// export it

// import it into both resultspage and heroes page
// that way you write DRY code and save yourself a lot of time and trouble

export default HeroesPage