import api from '@/api/calendarApi'
import {
	SQUAD_CALENDAR_DATA, SET_MY_SCHEDULE_CALENDAR
} from '@/store/store-mutation-constants.js'

export default {
    namespaced: true,
	state: {
		squadCalendatData: [],
		myCalendatData: [],
	},
	getters: {
		getSquadCalendarData: state => state.squadCalendatData,
		getMyCalendarData: state => state.myCalendatData
	},
	mutations: {
		[SQUAD_CALENDAR_DATA]: (state, value) => (state.squadCalendatData = value),
		[SET_MY_SCHEDULE_CALENDAR]: (state, value) => (state.myCalendatData = value)
	},
	actions: {
		fetchSquadCalendarData ({ commit }, { queryString, success } = {}) {
			// dispatch({ type: 'addLoader', root: true })
			api.fetchSquadCalendarData(
				result => {
					commit('SQUAD_CALENDAR_DATA', result.data)
					if (success) {
						success()
					}
					// dispatch({ type: 'removeLoader', root: true })
				},
				() => {},
				queryString
			)
		},
		fetchMyCalendarData ({ commit }, { queryString, success } = {}) {
			// dispatch({ type: 'addLoader', root: true })
			api.fetchMyCalendarData(
				result => {
					commit('SET_MY_SCHEDULE_CALENDAR', result.data)
					if (success) {
						success()
					}
					// dispatch({ type: 'removeLoader', root: true })
				},
				() => {},
				queryString
			)
		},
        addCalendarSchedule ({ commit }, { payload, success } = {}) {
            api.addCalendarSchedule(
                result => {
                    commit('SQUAD_CALENDAR_DATA', result.data)
					if (success) {
						success()
					}
					// dispatch({ type: 'removeLoader', root: true })
                },
                () => {},
				payload
            )
        }
	}
}
