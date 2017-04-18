import React from 'react'

var Details = React.createClass({
	render: function() {
		var imgSrc = `${this.props.collection.get('0').thumbnail.path}/portrait_incredible.${this.props.collection.get('0').thumbnail.extension}`;
		return (
			<div className="content-container">
				<div className="detail-container">
					<div className="info-container">
						<h4 className="detail-name">{this.props.collection.get('0').name}</h4>
						<h4 className="detail-description">{this.props.collection.get('0').description}</h4>
					</div>
					<div className="img-container">
						<img src={imgSrc} />
					</div>
				</div>
			</div>
		)
	}
})

export default Details