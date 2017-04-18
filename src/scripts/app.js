import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

import {MultiCollection} from './models/listingsModel'
import {SingleModel} from './models/detailsModel'
import HeroesPage from './views/HeroesPage'
import SearchResultsPage from './views/ResultsPage'
import DetailsPage from './views/detailsPage'
import STORE from './store'

import $ from 'jquery'

var baseUrl = 'http://gateway.marvel.com'
const targetUrl = 'https://en.wikipedia.org/wiki/Category:Marvel_Comics_superheroes';
var apiKey = '7230bc6904f7a94ee2e2a110d44ccb25'

var app = function() {
  // document.querySelector('.container').innerHTML = `<h1>finalProject</h1>`
  // var str = ''
  // $.getJSON('http://gateway.marvel.com/v1/public/characters?apikey=7230bc6904f7a94ee2e2a110d44ccb25')
  // 	.then(resp=>{
  // 		console.log(resp.data.results)
  // 		resp.data.results.forEach(function(char) {
  // 			str += `<h2 class="character-name">${char.name}</h2>` 
  // 			str += `<img src="${char.thumbnail.path}.${char.thumbnail.extension}" />`
  // 		})
		// document.querySelector('.container').innerHTML = str
  // 	})
  var MarvelRouter = Backbone.Router.extend({

  		routes: {

  			"home": "showMultiView",
  			"search/:query": "performSearch",
  			"details/:id": "showSingleView",
  			"*default": "goHome"
  		},

  		//route for going to the home page

  		showMultiView: function() {

  			var homeInstance = new MultiCollection()
  			homeInstance.fetch({

  					// dataType: 'jsonp',
  					data: {
  						"apikey": apiKey
  					}
  			})

			ReactDOM.render(<HeroesPage multiCollection={homeInstance} />, document.querySelector('.container'))
  		},

  		goHome: function() {

  			location.hash = 'home'
  		},

  		performSearch: function(query) {
  			var characterInstance = new MultiCollection()
			var promise = characterInstance.fetch({
			data: {
				"apikey": apiKey,
				"nameStartsWith": query
			}
		})
			promise.then(function() {
				ReactDOM.render(<SearchResultsPage multiCollection={characterInstance} />, document.querySelector('.container'))
			})
			

	},

  		showSingleView: function(id) {

  			var singleInstance = new SingleModel()
  			singleInstance.url += "/" + id 
  			var promise = singleInstance.fetch({

  					// dataType: 'jsonp',
  					data: {
  						"apikey": apiKey
  					}
  			})

  			promise.then(function() {

  				ReactDOM.render(<DetailsPage singleModel={singleInstance} />, document.querySelector('.container'))

  			})
  			
  		},

  })

  	new MarvelRouter()
  	Backbone.history.start()

}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..