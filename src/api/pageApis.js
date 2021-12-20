import config from '@/config'
import apiCall from './apiUtil/makeApiCall.js'

export default {
	fetchUserAlertData: (callback, fail, filters) => {
		apiCall.makeGetRequest(`${config.api.athens.fetchUserAlertData}${filters}`, callback, fail)
	},

	fetchSquadAlertData: (callback, fail, filters) => {
		apiCall.makeGetRequest(`${config.api.athens.fetchSquadAlertData}${filters}`, callback, fail)
	},

	acknowledgeAlert: (callback, fail, filters) => {
		apiCall.makePostRequest(`${config.api.athens.acknowledgeAlert}${filters}`, callback, fail)
	},

	pagginSquads: (callback, fail, payload) => { 
        apiCall.makePostRequest(`${config.api.athens.pagginSquads}`, callback, fail, payload)
    },

	fetchNotification: (callback, fail, filters) => { 
        apiCall.makeGetRequest(`${config.api.athens.fetchNotification}${filters}`, callback, fail)
    },
}
