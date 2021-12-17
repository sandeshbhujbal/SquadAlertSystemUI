import config from '@/config'
import apiCall from './apiUtil/makeApiCall.js'

export default {
	fetchSquadCalendarData: (callback, fail, queryString) => { 
        debugger
        apiCall.makeGetRequest(`${config.api.athens.fetchSquadCalendarData}${queryString}`, callback, fail)
    }
}
