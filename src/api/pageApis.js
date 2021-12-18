import config from '@/config'
import apiCall from './apiUtil/makeApiCall.js'

export default {
	fetchSquadAlertData: (callback, fail, filters) => {
		apiCall.makeGetRequest(`${config.api.athens.fetchSquadAlertData}${filters}`, callback, fail)
	}
}
