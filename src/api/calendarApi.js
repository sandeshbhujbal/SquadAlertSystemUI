import config from '@/config'
import apiCall from './apiUtil/makeApiCall.js'

export default {
	fetchSquadCalendarData: (callback, fail, queryString) => { 
        apiCall.makeGetRequest(`${config.api.athens.fetchSquadCalendarData}${queryString}`, callback, fail)
    },

    addCalendarSchedule: (callback, fail, payload) => { 
        debugger
        apiCall.makePostRequest(`${config.api.athens.addCalendarSchedule}`, callback, fail, payload)
    }
}
