import BaseIcon from '@/components/base-icon/BaseIcon.vue'


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
			titles: ['Title', 'Title', 'Action'],
            items: [{
                value: 'High',
                key: 0
            },{
                value: 'Medium',
                key: 1
            },{
                value: 'Low',
                key: 2
            }],
            pageInputs: { ...PAGE_INPUTS },
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
    methods: {
        handleCreateInboundOrder() {

        }
    },
	components: { BaseIcon }
}
