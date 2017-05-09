import React from 'react'

var Details = React.createClass({
	render: function() {
		console.log(this.props.collection)
		var infoLink = `${this.props.collection.get('0').urls[1].url}`;
		var imgSrc = `${this.props.collection.get('0').thumbnail.path}/portrait_fantastic.${this.props.collection.get('0').thumbnail.extension}`;
		// var comicsLink = `https://readcomiconline.to`;
		return (
			<div className="content-container">
				<div className="detail-container">
					<div className="img-container">
						<div className="info-container">
							<a href={infoLink}><h4 className="detail-name"><i>{this.props.collection.get('0').name}</i></h4></a>
							<img src={imgSrc} />
							<p className="detail-description">{this.props.collection.get('0').description}</p>
						</div>
						<p className="comics"><a><b>Comic Book Appearances:</b></a></p>
						<ComicsBooks model={this.props.collection} />
						<p className="events"><b>Crossover affairs within the Marvel Universe:</b></p>
						<Events model={this.props.collection} />
					</div>
				</div>
			</div>
		)
	}
})

var ComicsBooks = React.createClass({

	createComicBook: function(comicBook,index) {
		return	<li key={index}> {comicBook.name} </li>
	},

	render: function() {
		console.log(this.props.model)
		return(
			<ul className="comicsBooks">
				{this.props.model.get('0').comics.items.map(this.createComicBook)}
			</ul>
		)
	}
})

var Events = React.createClass({
	createEvent: function(event,index) {
		return	<li key={index}> {event.name} </li>
	},

	render: function() {
		return(
			<ul className="events">
				{this.props.model.get('0').events.items.map(this.createEvent)}
			</ul>
		)
	}
})

export default Details