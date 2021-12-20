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
			currentSquadName: '',
			activeTabName: 'Open Alerts',
			titles: ['Squad', 'Sent By', 'Sent To', 'Severity', 'Details', 'Summary', 'Status', 'Acknowledge']
		}
	},
	created () {
		this.currentUserName = localStorage.getItem("currenUser");
		this.CURRENT_USER_DATA(this.currentUserName)
		this.fetchTableData()
	},
	methods: {
		...mapActions('pageSettingsStore', ['fetchSquadAlertData', 'acknowledgeAlert']),
		...mapMutations('utils', ['CURRENT_USER_DATA']),
		fetchTableData () {
			const currentUserObject = this.usersDetails.find(item => item.name === this.currentUserName)
			this.currentSquadName = currentUserObject.squadName
			const status = this.activeTabName === 'Open Alerts' ? 'OPEN':'ACKNOWLEDGED'
			const filters = `?page=0&size=50&squad=${currentUserObject.squadName}&status=${status}`
			this.fetchSquadAlertData({ filters, success: this.handleCreateInboundOrder })
		},
		handleCreateInboundOrder () {
			this.contents.splice(0)
			for (const item of this.getSquadAlertData) {
				const obj = {
					squad: item.squad,
					sentBy: item.sentBy,
					sentTo: item.sentTo,
					severity: item.severity,
					details: item.details,
					summary: item.summary,
					status: item.status,
					button: 'Acknowledge'
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
				message: 'Acknowledged Successfully',
				type: 'success'
			})
        }
	},
	computed: {
		...mapGetters('pageSettingsStore', ['getSquadAlertData'])
	},
	components: { BaseIcon }
}
