import Calendar from '@/components/schedule-calendar/calendar.vue'

export default {
	data: function (){
		return {
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
	components: { Calendar }
}
