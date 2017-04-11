import Backbone from 'backbone'

export var SingleModel = Backbone.Model.extend({
    url: 'https://gateway.marvel.com/v1/public/characters',
    parse: function(apiResponse) { // obtain json data for home page
        return apiResponse.data.results[0]
    }
})