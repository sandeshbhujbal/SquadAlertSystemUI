import Calendar from '@/components/schedule-calendar/calendar.vue'
import BaseIcon from '@/components/base-icon/BaseIcon.vue'
import ModalComponent from '@/components/modal-component/ModalComponent.vue'
import { USER_DETAILS } from '@/data/user-details-constant.js'
import { mapActions, mapGetters, mapMutations } from 'vuex'

const ADD_CALENDAR_INPUTS = {
	date: '',
	startAndEndDates: [],
	picNames: [],
	squadId: '',
}

export default {
	data () {
		return {
			value6: [],
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
			usersDetails: [...USER_DETAILS],
			currentUserName: '',
			currentSquadName: '',
			currentSquadId: '',
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
			centerDialogVisible: false,
			addCalendarInput: { ...ADD_CALENDAR_INPUTS }
		}
	},
	created () {
		this.currentUserName = localStorage.getItem('currenUser')
		this.CURRENT_USER_DATA(this.currentUserName)
		this.fetchScheduleData()
	},
	methods: {
		...mapActions('calendarSettingsStore', ['fetchSquadCalendarData', 'addCalendarSchedule']),
		...mapMutations('utils', ['CURRENT_USER_DATA']),
		fetchScheduleData () {
			const currentUserObject = this.usersDetails.find(item => item.name === this.currentUserName)
			const queryString = `?squadId=${currentUserObject.squadId}`
			this.currentSquadName = currentUserObject.squadName
			this.currentSquadId= currentUserObject.squadId
			this.fetchSquadCalendarData({ queryString, success: this.checkCallBack })
		},
		refreshCalendar () {
			this.addCalendarInput = { ...ADD_CALENDAR_INPUTS }
			const currentUserObject = this.usersDetails.find(item => item.name === this.currentUserName)
			const queryString = `?squadId=${currentUserObject.squadId}`
			this.fetchSquadCalendarData({ queryString, success: this.checkCallBack })
		},

		checkCallBack () {
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
		},
		dateConversion (epcoDate) {
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
			this.centerDialogVisible = true
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
			this.addCalendarInput.startDateTime.sendingValue = e.start
			this.startDateRanged ||
				((this.addCalendarInput.startDateTime.value = e.start.toLocaleDateString('id-ID')),
				(this.addCalendarInput.startDateTime.text = this.addCalendarInput.startDateTime.value),
				this.closeDatePicker())
		},
		updateEndValue (e) {
			this.addCalendarInput.endDateTime.sendingValue = e.start
			this.startDateRanged ||
				((this.addCalendarInput.endDateTime.value = e.start.toLocaleDateString('id-ID')),
				(this.addCalendarInput.endDateTime.text = this.addCalendarInput.endDateTime.value),
				this.closeDatePicker())
		},
		saveCalendarSchedule () {
			const payload = {
				date: new Date().toISOString(),
				startDateTime: new Date(this.addCalendarInput.startAndEndDates[0]).toISOString(),
				endDateTime: new Date(this.addCalendarInput.startAndEndDates[1]).toISOString(),
				squadId: this.currentSquadId,
				picNames: this.addCalendarInput.picNames
			}
			debugger
			this.addCalendarSchedule({ payload, success: this.actionPerformedForAlert })
		},
		actionPerformedForAlert () {
			this.centerDialogVisible = false
			this.refreshCalendar()
			this.$toast.open({
				duration: 5e3,
				message: 'Schedule Saved',
				type: 'success'
			})
		}
	},
	computed: {
		...mapGetters('calendarSettingsStore', ['getSquadCalendarData'])
	},
	components: { Calendar, BaseIcon, ModalComponent }
}
