import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import ModalComponent from '@/components/modal-component/ModalComponent.vue'

export default {
	components: { VueCal, ModalComponent },
	data: () => ({
        openModal: false,
		currentDate: (new Date()).toISOString().split('T')[0]
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
