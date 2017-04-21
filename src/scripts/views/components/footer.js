import React from 'react'

var Footer = React.createClass({
	

	render: function () {
		var marvelWebsite = "https://marvel.com"

		return (
			<div className="footer">
				<p className="footer-info"><a className="bottom-title" href="#home">Marvelus</a> data provided by<a className="marvel" href={marvelWebsite}> Marvel.</a> © 2014</p>
			</div>
		)
	}
})

export default Footer