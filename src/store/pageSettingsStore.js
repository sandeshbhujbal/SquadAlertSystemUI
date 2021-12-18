import api from '@/api/pageApis'
import {
	SET_SQUAD_ALERT_DATA,
} from '@/store/store-mutation-constants.js'

export default {
    namespaced: true,
	state: {
		setSquadAlertData: [],
	},
	getters: {
		getSquadAlertData: state => state.setSquadAlertData,
	},
	mutations: {
		[SET_SQUAD_ALERT_DATA]: (state, value) => (state.setSquadAlertData = value),
	},
	actions: {
		fetchSquadAlertData ({ commit }, { filters, success } = {}) {
			api.fetchSquadAlertData(
				result => {
					commit('SET_SQUAD_ALERT_DATA', result.data)
					if (success) {
						success()
					}
					dispatch({ type: 'removeLoader', root: true })
				},
				() => {},
				filters,
			)
		}
	}
}
