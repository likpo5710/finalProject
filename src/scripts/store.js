import Backbone from 'backbone'
import {MultiCollection} from './models/listingsModel'

const STORE = Object.assign({}, Backbone.Events, {
	data: {
		multiCollection: new MultiCollection()
	},

	get: function(prop) {
		//parameter 'prop' meaning property of the object model
		if (this.data[prop] === undefined) {
			throw new Error('the store doesn\'t have a property called ' + prop)
		}
		return this.data[prop]
	},

	set: function(attrs) {
		this.data = Object.assign(this.data.attrs)
		this.trigger('dataUpdated')
	}
})

export default STORE