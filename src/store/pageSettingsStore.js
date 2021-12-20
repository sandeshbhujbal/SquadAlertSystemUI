import api from '@/api/pageApis'
import { SET_USER_ALERT_DATA, SET_SQUAD_ALERT_DATA, SET_NOTIFICATION_DATA, SET_NOTIFICATION_DATA_FOR_COUNT } from '@/store/store-mutation-constants.js'

export default {
	namespaced: true,
	state: {
		setUserAlertData: [],
		setSquadAlertData: [],
		setNotificationData: [],
        setNotificationForCount: [],
	},
	getters: {
		getUserAlertData: state => state.setUserAlertData,
		getSquadAlertData: state => state.setSquadAlertData,
		getNotificationData: state => state.setNotificationData,
        getNotificationForCount: state => state.setNotificationForCount
	},
	mutations: {
		[SET_USER_ALERT_DATA]: (state, value) => (state.setUserAlertData = value),
		[SET_SQUAD_ALERT_DATA]: (state, value) => (state.setSquadAlertData = value),
		[SET_NOTIFICATION_DATA]: (state, value) => (state.setNotificationData = value),
        [SET_NOTIFICATION_DATA_FOR_COUNT]: (state, value) => (state.setNotificationForCount = value),
	},
	actions: {
		fetchUserAlertData ({ commit }, { filters, success } = {}) {
			api.fetchUserAlertData(
				result => {
					commit('SET_USER_ALERT_DATA', result.data)
					if (success) {
						success()
					}
				},
				() => {},
				filters
			)
		},
		fetchSquadAlertData ({ commit }, { filters, success } = {}) {
			api.fetchSquadAlertData(
				result => {
					commit('SET_SQUAD_ALERT_DATA', result.data.contents)
					if (success) {
						success()
					}
				},
				() => {},
				filters
			)
		},
		acknowledgeAlert ({}, { filters, success } = {}) {
			api.acknowledgeAlert(
				() => {
					if (success) {
						success()
					}
				},
				() => {},
				filters
			)
		},
		pagginSquads ({ commit }, { payload, success } = {}) {
			api.pagginSquads(
				result => {
					commit('SET_SQUAD_ALERT_DATA', result.data)
					if (success) {
						success()
					}
				},
				() => {},
				payload
			)
		},
		fetchNotification ({ commit }, { filters, success } = {}) {
			api.fetchNotification(
				result => {
					commit('SET_NOTIFICATION_DATA', result.data)
					if (success) {
						success()
					}
				},
				() => {},
				filters
			)
		},
        fetchNotificationForCount ({ commit }, { filters, success } = {}) {
			api.fetchNotificationForCount(
				result => {
					commit('SET_NOTIFICATION_DATA_FOR_COUNT', result.data)
					if (success) {
						success()
					}
				},
				() => {},
				filters
			)
		},
		acknowledgeNotification ({}, { filters, success } = {}) {
            api.acknowledgeNotification(
				() => {
					if (success) {
						success()
					}
				},
				() => {},
				filters
			)
        }
	}
}
