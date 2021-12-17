export default {
	name: 'button-component',
	props: {
		className: {
			type: String,
			required: false,
			default: 'default-button'
		},
		onClick: {
			type: Function,
			required: false,
			default: () => {}
		},
		onMousedown: {
			type: Function,
			required: false,
			default: () => {}
		},
		isDisabled: {
			type: Boolean,
			required: false,
			default: () => {}
		},
		name: {
			type: String,
			required: false
		},
		id: {
			type: String,
			required: false,
			default: 'button'
		}
	},
	methods: {
		callOnClick () {
			this.onClick()
		},
		callMouseDown () {
			this.onMousedown()
		}
	}
}
