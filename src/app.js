import SideMenu from '@/components/side-menu/SideMenu.vue'
import TheHeader from '@/components/the-header/TheHeader.vue'
import TheFooter from '@/components/the-footer/TheFooter.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
	name: 'oms-app',
	data: function (){
		return {
			currentUserName: ''
		}
	},
	components: {
		SideMenu,
		TheHeader,
		TheFooter
	},

	computed: {
		...mapGetters('pageSettingsStore', ['getNotificationForCount'])
	},
	created () {
	},
	methods: {
		...mapActions('pageSettingsStore', ['fetchNotificationForCount']),
		...mapMutations('utils', ['CURRENT_USER_DATA']),
		pollNotificationRegularly () {
			const filters = `?medium=EMAIL&user=${localStorage.getItem('currenUser')}`
			setInterval(() => {
				this.fetchNotificationForCount({ filters, success: this.handleCreateInboundOrder })
			}, 9000)
		}
	}
}
