import BaseIcon from '@/components/base-icon/BaseIcon.vue'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
	data () {
		return {
			selectedUser: '',
            polling: null,
			userObjectList: [
				{
					userName: 'Aman Dhaka',
					userId: '1'
				},
				{
					userName: 'Sandesh Bhujbal',
					userId: '2'
				},
				{
					userName: 'Shubham Kumar',
					userId: '3'
				},
				{
					userName: 'Milan Rathod',
					userId: '4'
				},
				{
					userName: 'Sujoy Dey',
					userId: '5'
				},
				{
					userName: 'Vijay Surya Singh',
					userId: '6'
				}
			],
			input: '',
			width: '30%',
			property: ''
		}
	},
	methods: {
		...mapMutations('utils', ['CURRENT_USER_DATA', 'SET_INTERVAL_COUNTER']),
        ...mapMutations('pageSettingsStore', ['SET_NOTIFICATION_DATA_FOR_COUNT']),
		...mapActions('pageSettingsStore', ['fetchNotificationForCount']),
		handleCreateInboundOrder () {},
		userChanges ({ value }) {
			this.CURRENT_USER_DATA(value)
			localStorage.setItem('currenUser', value)
            this.pollNotificationRegularly(value)
			this.$router.push({
				name: 'PageView'
			})
		},
        pollNotificationRegularly () {
			const filters = `?medium=EMAIL&user=${localStorage.getItem('currenUser')}`
			this.polling = setInterval(() => {
				this.fetchNotificationForCount({ filters, success: this.handleCreateInboundOrder })
			}, 9000)
            this.SET_INTERVAL_COUNTER(this.polling)
		}
	},
	created () {
        clearInterval(this.getIntervalCounter)
        this.SET_NOTIFICATION_DATA_FOR_COUNT([])
	},
    computed: {
        ...mapGetters('utils', ['getIntervalCounter'])
    },
	components: { BaseIcon }
}
