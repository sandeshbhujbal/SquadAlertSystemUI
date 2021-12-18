import BaseIcon from '@/components/base-icon/BaseIcon.vue'
import { mapActions, mapGetters } from 'vuex'

const PAGE_INPUTS = {
	pagingEmailAddress: '',
	severity: 'High',
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
			pageInputs: { ...PAGE_INPUTS },
			contents: [],
			titles: ['Squad', 'Sent By', 'Sent To', 'Severity', 'Details', 'Summary', 'Status', 'Button']
		}
	},
	created () {
		this.fetchTableData()
	},
	methods: {
		...mapActions('pageSettingsStore', ['fetchSquadAlertData']),
		fetchTableData () {
			const filters = `?username=milan`
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
		}
	},
	computed: {
		...mapGetters('pageSettingsStore', ['getSquadAlertData'])
	},
	components: { BaseIcon }
}
