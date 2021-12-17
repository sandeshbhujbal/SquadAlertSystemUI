import config from '@/config'
import apiCall from './apiUtil/makeApiCall.js'

export default {
	getAlertListingData: (callback, payload, filters, fail) => apiCall.makePostRequest(`${config.api.athens.getAlertListingData}${filters}`, callback, fail, payload)
}
