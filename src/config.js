const API_SPM = `http://localhost:9191/api`

export default {
	api: {
		// auth: {
		// 	login: '/auth/login',
		// 	logout: '/auth/logout',
		// 	user: '/auth/users/_current'
		// },
		athens: {
			// System Configuration API's
			getSystemConfig: `${API_SPM}/systemParameter`,

			// Common API's
			getAllCategories: `${API_SPM}/category`,
			getChildCategory: `${API_SPM}/category`,
			getBrands: `${API_SPM}/brand`,
			getWarehouses: `${API_SPM}/warehouse`,
			getVendors: `${API_SPM}/vendor`,
			getStockLabel: `${API_SPM}/getStockLabels`,
			getStockStatus: `${API_SPM}/getStockStatus`,
			getMerchants: `${API_SPM}/merchant`,
			getDepartments: `${API_SPM}/department`,
			getAreaList: `${API_SPM}/area`,

			//calendat api's
			fetchSquadCalendarData: `${API_SPM}/calendar/listCalendar`,
		}
	}
}
