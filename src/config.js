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

			//calendat api's
			fetchSquadCalendarData: `${API_SPM}/calendar/listCalendar`,
			addCalendarSchedule: `${API_SPM}/calendar/saveCalendar`,

			//alert api's
			fetchUserAlertData: `${API_SPM}/alert/user-list`,
			fetchSquadAlertData: `${API_SPM}/alert/list`,
			acknowledgeAlert: `${API_SPM}/alert/acknowledge`,
			pagginSquads: `${API_SPM}/page`,

			//notification api's
			fetchNotification: `${API_SPM}/notification/fetch`
		}
	}
}
