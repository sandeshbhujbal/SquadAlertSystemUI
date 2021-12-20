import BaseIcon from '@/components/base-icon/BaseIcon.vue'
import { USER_DETAILS } from '@/data/user-details-constant.js'
import { mapActions, mapGetters, mapMutations } from 'vuex'

const PAGE_INPUTS = {
	pagingEmailAddress: '',
	severity: {
		text: 'High',
		value: 'High'
	},
	summary: '',
	details: ''
}
export default {
	data: function (){
		return {
			input: '',
			width: '30%',
			property: '',
			sort: !1,
			items: [
				{
					value: 'High',
					key: 0
				},
				{
					value: 'Medium',
					key: 1
				},
				{
					value: 'Low',
					key: 2
				}
			],
			usersDetails: [ ...USER_DETAILS ],
			currentUserName: '',
			pageInputs: { ...PAGE_INPUTS },
			contents: [],
			titles: ['Squad', 'Sent By', 'Sent To', 'Severity', 'Details', 'Summary', 'Status', 'Acknowledge']
		}
	},
	created () {
		this.currentUserName = localStorage.getItem("currenUser");
		this.CURRENT_USER_DATA(this.currentUserName)
		this.fetchTableData()
	},
	methods: {
		...mapActions('pageSettingsStore', ['fetchUserAlertData', 'pagginSquads', 'acknowledgeAlert']),
		...mapMutations('utils', ['CURRENT_USER_DATA']),
		fetchTableData () {
			const filters = `?username=${this.currentUserName}`
			this.fetchUserAlertData({ filters, success: this.handleCreateInboundOrder })
		},
		handleCreateInboundOrder () {
			this.contents.splice(0)
			for (const item of this.getUserAlertData) {
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
		handelCreatePage () {
			const payload = {
				details: this.pageInputs.details,
				pagingEmailAddress: `${this.pageInputs.pagingEmailAddress}@gmail.com`,
				summary: this.pageInputs.summary,
				severity: this.pageInputs.severity.value.toUpperCase()
			}
			this.pagginSquads({ payload, success: this.actionPerformed })
		},
		actionPerformed () {
            this.fetchTableData()
			this.$toast.open({
				duration: 5e3,
				message: 'Paged Successfully',
				type: 'success'
			})
		},
        acknowLedgeAlertAction (index) {
            const filters = `?alertId=${this.getUserAlertData[index].id}&status=ACKNOWLEDGED`
            this.acknowledgeAlert({ filters, success: this.actionPerformedForAlert})
        },
        actionPerformedForAlert() {
            this.fetchTableData()
            this.$toast.open({
				duration: 5e3,
				message: 'Acnowledge Successfully',
				type: 'success'
			})
        }
	},
	computed: {
		...mapGetters('pageSettingsStore', ['getUserAlertData'])
	},
	components: { BaseIcon }
}
