import React from 'react'
import ACTIONS from '../../actions'

var Banner = React.createClass({
	handleSearch: function(eventObj) {
		if (eventObj.keyCode === 13) {
			location.hash = `search/${eventObj.target.value}`
			eventObj.target.value = ''
		}
  
	},

	render: function() {
		return (
			<div className="banner">
					<h4><a href="#home">Marvelus</a></h4>
					<input type="text" onKeyDown={this.handleSearch} placeholder="   search character" name="characterSearch" />
			</div>
		)
	}
})

export default Banner