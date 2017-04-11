import STORE from './store'
import {SingleModel} from './models/detailsModel'
import {MultiCollection} from './models/listingsModel'

var apiKey = '7230bc6904f7a94ee2e2a110d44ccb25'

const ACTIONS = {
	searchCharacter: function(searchString) {
		var characterInstance = new MultiCollection()
		var promise = characterInstance.fetch({
			data: {
				"apikey": apiKey,
				"nameStartsWith": searchString
			}
		})

		promise.then(() => {

			STORE.set({
				multiCollection: characterInstance
			})
		})
	}
}

export default ACTIONS