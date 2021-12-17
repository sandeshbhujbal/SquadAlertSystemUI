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
			component: loadComponent('page-view/PageView'),
			meta: {
				workflow: 'alertManagement'
			}
		}
	]
})

export default router
