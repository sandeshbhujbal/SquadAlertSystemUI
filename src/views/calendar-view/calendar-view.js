import Calendar from '@/components/schedule-calendar/calendar.vue'
import BaseIcon from '@/components/base-icon/BaseIcon.vue'
import ModalComponent from '@/components/modal-component/ModalComponent.vue'
import { mapActions, mapGetters } from 'vuex'

const ADD_CALENDAR_INPUTS = {
	date: '',
	endDateTime: {
		value: '',
		text: '',
        sendingValue: ''
	},
	picNames: [],
	squadId: '',
	startDateTime: {
		value: '',
		text: '',
        sendingValue: ''
	}
}

export default {
	data () {
		return {
			visibleModal: !1,
			value: {
				value: '',
				text: ''
			},
			userObjectList: [
				{
					userName: 'Aman Dhaka',
					userId: '1'
				},
				{
					userName: 'Sandesh Bhujbal',
					userId: '2'
				}
			],
			calendarValues: [],
			openModal: false,
			width: '20%',
			property: '',
			sort: !1,
			startDateRanged: !1,
            endDateRanged: !1,
			showStartDatePicker: !1,
            showEndDatePicker: !1,
			titles: ['Title', 'Title', 'Action'],
			addCalendarInput: { ...ADD_CALENDAR_INPUTS }
		}
	},
	created () {
		const queryString = `?squadId=03d7db99-dd18-4935-b220-a249bf5a49b8`
		this.fetchSquadCalendarData({ queryString, success: this.checkCallBack })
	},
	methods: {
		...mapActions('calendarSettingsStore', ['fetchSquadCalendarData', 'addCalendarSchedule']),

        refreshCalendar() {
            this.addCalendarInput= { ...ADD_CALENDAR_INPUTS }
            const queryString = `?squadId=03d7db99-dd18-4935-b220-a249bf5a49b8`
		    this.fetchSquadCalendarData({ queryString, success: this.checkCallBack })
        },

		checkCallBack () {
			console.log(this.getSquadCalendarData)
			console.log('check')
			for (const item of this.getSquadCalendarData) {
				const obj = {
					start: this.dateConversion(item.startDateTime),
					end: this.dateConversion(item.endDateTime),
					class: 'sport',
					title: item.squadName,
					content: item.picNames.toString()
				}
				this.calendarValues.push(obj)
			}
			console.log(this.calendarValues)
		},
		dateConversion (epcoDate) {
			console.log(epcoDate)
			var date = new Date(epcoDate)
			var year = date.getFullYear()
			var month = date.getMonth() + 1
			var day = date.getDate()
			var hours = date.getHours()
			var minutes = date.getMinutes()
			var seconds = date.getSeconds()
			return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
		},
		handleCreateInboundOrder () {
			this.visibleModal = !0
		},
		closeDatePicker () {
			this.showStartDatePicker = !1
		},
        closeEndDatePicker () {
			this.showEndDatePicker = !1
		},
		openDatePicker () {
			this.showStartDatePicker = !0
		},
        openEndDatePicker () {
			this.showEndDatePicker = !0
		},
		updateValue (e) {
			// debugger
			// console.log(e.start)
			// console.log(e.start.toLocaleDateString('id-ID'))
            this.addCalendarInput.startDateTime.sendingValue = e.start
			this.startDateRanged || ((this.addCalendarInput.startDateTime.value = e.start.toLocaleDateString('id-ID')), (this.addCalendarInput.startDateTime.text = this.addCalendarInput.startDateTime.value), this.closeDatePicker())
		},
        updateEndValue (e) {
			// debugger
			// console.log(e.start)
			// console.log(e.start.toLocaleDateString('id-ID'))
            this.addCalendarInput.endDateTime.sendingValue = e.start
			this.startDateRanged || ((this.addCalendarInput.endDateTime.value = e.start.toLocaleDateString('id-ID')), (this.addCalendarInput.endDateTime.text = this.addCalendarInput.endDateTime.value), this.closeDatePicker())
		},
        saveCalendarSchedule () {
            debugger
            const payload = {
                date: new Date().toISOString(),
                startDateTime: new Date(this.addCalendarInput.startDateTime.sendingValue).toISOString(),
                endDateTime: new Date(this.addCalendarInput.endDateTime.sendingValue).toISOString(),
                squadId: '03d7db99-dd18-4935-b220-a249bf5a49b8',
                picNames: [this.addCalendarInput.picNames.value]
            }
            debugger
            this.addCalendarSchedule({payload, success: this.refreshCalendar})
        }
	},
	computed: {
		...mapGetters('calendarSettingsStore', ['getSquadCalendarData'])
	},
	components: { Calendar, BaseIcon, ModalComponent }
}
