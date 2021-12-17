import config from '@/config'
import apiCall from './apiUtil/makeApiCall.js'

export default {
	getAreaList: (callback, fail) => apiCall.makeGetRequest(config.api.athens.getAreaList, callback, fail),

	getDepartments: (callback, fail) => apiCall.makeGetRequest(config.api.athens.getDepartments, callback, fail),

	getStockLabel: (callback, fail) => apiCall.makeGetRequest(config.api.athens.getStockLabel, callback, fail),

	getStockStatus: (callback, fail) => apiCall.makeGetRequest(config.api.athens.getStockStatus, callback, fail),

	getKpiFields: (callback, fail) => apiCall.makeGetRequest(`${config.api.athens.getKpiFields}/WAREHOUSE`, callback, fail),

	getOrderStatus: (callback, fail) => apiCall.makeGetRequest(config.api.athens.getOrderStatus, callback, fail),

	getDocumentStatus: (callback, fail) => apiCall.makeGetRequest(config.api.athens.getDocumentStatus, callback, fail),

	getWarehouses: (callback, fail) => apiCall.makeGetRequest(config.api.athens.getWarehouses, callback, fail),

	fetchAllPermissions: (callback, fail) => apiCall.makeGetRequest(config.api.athens.getAllPermissions, callback, fail),

	getTODocumentStatus: (callback, fail) => apiCall.makeGetRequest(config.api.athens.getTODocumentStatus, callback, fail),

	getAlertType: (callback, fail) => apiCall.makeGetRequest(config.api.athens.getAlertType, callback, fail),

	getAlertSubType: (callback, fail) => apiCall.makeGetRequest(config.api.athens.getAlertSubType, callback, fail),

	getAllMerchants: (callback, fail) => apiCall.makeGetRequest(config.api.athens.getMerchants, callback, fail),

	getChildCategory: (callback, fail, payload) => apiCall.makePostRequest(config.api.athens.getChildCategory, callback, fail, payload),

	getBrands: (callback, fail, payload) => apiCall.makePostRequest(config.api.athens.getBrands, callback, fail, payload),

	getUsedWarehouses: (callback, fail, payload) => apiCall.makeGetRequest(config.api.athens.getUsedWarehouses, callback, fail, payload),

	getUsedMerchants: (callback, fail, payload) => apiCall.makeGetRequest(config.api.athens.getUsedMerchants, callback, fail, payload),

	getMerchants: (callback, queryString, fail) => apiCall.makeGetRequest(config.api.athens.getMerchants + queryString, callback, fail),
}
