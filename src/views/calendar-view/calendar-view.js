import Calendar from '@/components/schedule-calendar/calendar.vue'
import BaseIcon from '@/components/base-icon/BaseIcon.vue'
import ModalComponent from '@/components/modal-component/ModalComponent.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
	data () {
		return {
			showDatePicker: !1,
			visibleModal: !1,
			value: {
				value: '',
				text: ''
			},
			events: [
				{
					start: '2021-12-16 10:30',
					end: '2021-12-17 11:30',
					// You can also define event dates with Javascript Date objects:
					// start: new Date(2018, 11 - 1, 16, 10, 30),
					// end: new Date(2018, 11 - 1, 16, 11, 30),
					title: 'Doctor appointment',
					content: '<i class="v-icon material-icons">local_hospital</i>',
					class: 'health'
				},
				{
					start: '2021-12-16 10:30',
					end: '2021-12-16 11:30',
					// You can also define event dates with Javascript Date objects:
					// start: new Date(2018, 11 - 1, 16, 10, 30),
					// end: new Date(2018, 11 - 1, 16, 11, 30),
					title: 'GYM',
					content: '<i class="v-icon material-icons">local_hospital</i>',
					class: 'sport'
				}
			],
			openModal: false,
			width: '20%',
			property: '',
			sort: !1,
			titles: ['Title', 'Title', 'Action'],
			contents: [
				{
					title1: 'Content',
					title2: 'Display text inside the label in case not provided via default slot',
					action: 'link'
				},
				{
					title1: 'Content',
					title2: 'Display text inside the label in case not provided via default slot',
					action: 'default btn'
				},
				{
					title1: 'Content',
					title2: 'placeholder',
					action: 'default btn'
				},
				{
					title1: 'Content',
					title2: 'Display text inside the label in case not provided via default slot',
					action: '<BliIconCheck />'
				}
			]
		}
	},
	created () {
		const queryString = `?squadId=03d7db99-dd18-4935-b220-a249bf5a49b8`
		this.fetchSquadCalendarData({ queryString, success: this.checkCallBack })
	},
	methods: {
		...mapActions('calendarSettingsStore', ['fetchSquadCalendarData']),

		checkCallBack () {
			debugger
			console.log(this.getSquadCalendarData)
			console.log('check')
		},
		handleCreateInboundOrder () {
			this.visibleModal = !0
		},
		closeDatePicker () {
			this.showDatePicker = !1
		},
		openDatePicker () {
			this.showDatePicker = !0
		},
		updateValue (e) {
			var t = e.end ? ' - '.concat(e.end.toLocaleDateString('id-ID')) : ''
			;(this.value.value = e.start.toLocaleDateString('id-ID') + t), (this.value.text = this.value.value), e.start && e.end && this.closeDatePicker()
		}
	},
	computed: {
		...mapGetters('calendarSettingsStore', ['getSquadCalendarData'])
	},
	components: { Calendar, BaseIcon, ModalComponent }
}
