import api from '@/api/pageApis'
import {
	CURRENT_USER_DATA,
} from '@/store/store-mutation-constants.js'

export default {
    namespaced: true,
	state: {
		currentUser: '',
	},
	getters: {
		getCurrentUser: state => state.currentUser,
	},
	mutations: {
		[CURRENT_USER_DATA]: (state, value) => (state.currentUser = value),
	},
	actions: {
		fetchProductClassifierData ({ commit, dispatch }, { success, filters = '', payload = {} } = {}) {
			dispatch({ type: 'addLoader', root: true })
			api.fetchProductClassifierData(
				result => {
					commit('SET_PRODUCT_CLASSIFIER_DATA', result.data.data)
					commit('SET_PRODUCT_CLASSIFIER_PAGINATION_DATA', result.data.paging)
					if (success) {
						success()
					}
					dispatch({ type: 'removeLoader', root: true })
				},
				() => {},
				filters,
				payload
			)
		}
	}
}
