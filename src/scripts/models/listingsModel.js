import Backbone from 'backbone'

export var MultiCollection = Backbone.Collection.extend({
	url: 'https://gateway.marvel.com/v1/public/characters',
	parse: function(apiResponse) {
		console.log(apiResponse)
		return apiResponse.data.results
		//this returns the superheroes models
	}
})