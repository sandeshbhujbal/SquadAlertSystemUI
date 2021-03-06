import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const loadComponent = path => () => import(`@/views/${path}.vue`)

const router = new VueRouter({
	mode: 'history',
	base: '/spm-ui',
	routes: [
		{
			path: '/',
			name: 'HomePage',
			component: loadComponent('home-view/HomeView')
		},
		{
			path: '/page-view',
			name: 'PageView',
			component: loadComponent('page-view/PageView')
		},
		{
			path: '/calendar-view',
			name: 'CalendarView',
			component: loadComponent('calendar-view/CalendarView')
		},
		{
			path: '/squad-alert',
			name: 'SquadAlert',
			component: loadComponent('squad-alert-view/SquadAlertView')
		},
		{
			path: '/my-schedule',
			name: 'MySchedule',
			component: loadComponent('my-calendar-view/MyCalendarView')
		},
		{
			path: '/my-notification',
			name: 'MyNotification',
			component: loadComponent('notification-view/NotificationView')
		}
	]
})

export default router
