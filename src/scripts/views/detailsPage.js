import React from 'react'
import Banner from './components/banner'
import Details from './details'
import Footer from './components/footer'

var DetailsPage = React.createClass({

	render: function() {
		return (
			<div className="detailsPage">
				<Banner />
				<Details collection={this.props.singleModel} />
				<Footer />
			</div>
		)
	}
})

export default DetailsPage