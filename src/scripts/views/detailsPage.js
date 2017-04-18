import React from 'react'
import Banner from './components/banner'
import Details from './details'

var DetailsPage = React.createClass({

	render: function() {
		return (
			<div className="detailsPage">
				<Banner />
				<Details collection={this.props.singleModel} />
			</div>
		)
	}
})

export default DetailsPage