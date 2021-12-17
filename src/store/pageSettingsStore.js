import api from '@/api/pageApis'
import {
	SET_PRODUCT_CLASSIFIER_DATA,
} from '@/store/store-mutation-constants.js'

export default {
	state: {
		productClassifierData: [],
	},
	getters: {
		getProductClassifierData: state => state.productClassifierData,
	},
	mutations: {
		[SET_PRODUCT_CLASSIFIER_DATA]: (state, value) => (state.productClassifierData = value),
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
