import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import ModalComponent from '@/components/modal-component/ModalComponent.vue'

export default {
	components: { VueCal, ModalComponent },
	data: () => ({
        openModal: false,
		// events: [
		// 	{
		// 		start: '2021-12-16 10:30',
		// 		end: '2021-12-17 11:30',
		// 		// You can also define event dates with Javascript Date objects:
		// 		// start: new Date(2018, 11 - 1, 16, 10, 30),
		// 		// end: new Date(2018, 11 - 1, 16, 11, 30),
		// 		title: 'Doctor appointment',
		// 		content: '<i class="v-icon material-icons">local_hospital</i>',
		// 		class: 'health'
		// 	},
        //     {
		// 		start: '2021-12-16 10:30',
		// 		end: '2021-12-16 11:30',
		// 		// You can also define event dates with Javascript Date objects:
		// 		// start: new Date(2018, 11 - 1, 16, 10, 30),
		// 		// end: new Date(2018, 11 - 1, 16, 11, 30),
		// 		title: 'GYM',
		// 		content: '<i class="v-icon material-icons">local_hospital</i>',
		// 		class: 'sport'
		// 	}
		// ]
	}),
    props: {
		events: {
			type: Array,
			required: true
		}
	},
    methods: {
        asa() {

        }
    },
}
