import BaseIcon from '@/components/base-icon/BaseIcon.vue'

export default {
	name: 'modal-component',
	data () {
		return {
			textarea: ''
		}
	},
	props: {
		title: String,
		name: {
			type: String,
			required: false
		},
		handleCloseModal: Function,
		handleButtonClick: {
			type: Function,
			required: false
		},
		isDisabled: {
			type: Boolean,
			required: false
		},
		selectWidth: {
			type: Number,
			required: false,
			default: 90
		},
		selectHeight: {
			type: Number,
			required: false
		},
		placeholder: {
			type: String,
			required: false,
			default: 'Select Item'
		},
		buttonRequired: {
			type: Boolean,
			required: false
		}
	},
	methods: {},
	components: {
		BaseIcon
	}
}
