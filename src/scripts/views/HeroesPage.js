import React from 'react'
import Banner from './components/banner'

var HeroesPage = React.createClass({

	// handleClick: function(eventObj) {
		
	// 	location.hash = "details/"
	// },

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
		console.log('this is the home page')
		console.log(this.props.multiCollection)
		return (
			<div className="HeroesPage">
				<Banner />
				<h1 className="viewTitle">Marvel Characters</h1>
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

	render: function() {
		var imgSrc = `${this.props.heroModel.get('thumbnail').path}/portrait_medium.${this.props.heroModel.get('thumbnail').extension}`;
		//var detailsLink = `${this.props.heroModel.get('urls')[1].url}`
		var detailsLink = '#details/' + `${this.props.heroModel.get('id')}`;
		return (
			<a href={detailsLink}>
				<div className="characterDiv">
					<img src={imgSrc} />
					<h3>{this.props.heroModel.get('name')}</h3>
				</div>
			</a>
		)
	}
})


// define hero component in another file
// export it

// import it into both resultspage and heroes page
// that way you write DRY code and save yourself a lot of time and trouble

export default HeroesPage