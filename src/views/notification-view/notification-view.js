import BaseIcon from '@/components/base-icon/BaseIcon.vue'
import { USER_DETAILS } from '@/data/user-details-constant.js'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
	data: function (){
		return {
			input: '',
			width: '30%',
			property: '',
			sort: !1,
			contents: [],
            usersDetails: [ ...USER_DETAILS ],
			currentUserName: '',
			titles: ['PIC Name', 'Medium', 'Summary', 'Details']
		}
	},
	created () {
        this.currentUserName = localStorage.getItem("currenUser");
		this.CURRENT_USER_DATA(this.currentUserName)
		this.fetchTableData()
	},
	methods: {
		...mapActions('pageSettingsStore', ['fetchNotification']),
        ...mapMutations('utils', ['CURRENT_USER_DATA']),
		fetchTableData () {
			const filters = `?medium=EMAIL&user=${this.currentUserName}`
			this.fetchNotification({ filters, success: this.handleCreateInboundOrder })
		},
		handleCreateInboundOrder () {
			this.contents.splice(0)
			for (const item of this.getNotificationData) {
				const obj = {
                    severity: item.picName,
					squad: item.notificationMedium,
					sentBy: item.summary,
					sentTo: item.details,
				}
				this.contents.push(obj)
			}
		},
        acknowLedgeAlertAction (index) {
            const filters = `?alertId=${this.getSquadAlertData[index].id}&status=ACKNOWLEDGED`
            this.acknowledgeAlert({ filters, success: this.actionPerformed})
        },
        actionPerformed() {
            this.fetchTableData()
            this.$toast.open({
				duration: 5e3,
				message: 'Paged Successfully',
				type: 'success'
			})
        }
	},
	computed: {
		...mapGetters('pageSettingsStore', ['getNotificationData'])
	},
	components: { BaseIcon }
}
