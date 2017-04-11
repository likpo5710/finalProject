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
				<div className="title">
					<h1>Project Title</h1>
				</div>
				<div className="searchBox">
					<input type="text" onKeyDown={this.handleSearch} placeholder="search character" name="characterSearch" />
				</div>
			</div>
		)
	}
})

export default Banner