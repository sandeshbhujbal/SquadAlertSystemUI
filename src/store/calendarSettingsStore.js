import api from '@/api/calendarApi'
import {
	SQUAD_CALENDAR_DATA,
} from '@/store/store-mutation-constants.js'

export default {
    namespaced: true,
	state: {
		squadCalendatData: [],
	},
	getters: {
		getSquadCalendarData: state => state.squadCalendatData,
	},
	mutations: {
		[SQUAD_CALENDAR_DATA]: (state, value) => (state.squadCalendatData = value),
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
