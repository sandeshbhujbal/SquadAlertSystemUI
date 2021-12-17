import BaseIcon from '@/components/base-icon/BaseIcon.vue'
import { mapMutations } from 'vuex'

export default {
	data () {
		return {
            selectedUser: '',
            userObjectList: [{
                userName: 'Aman Dhaka',
                userId: '1'
            },{
                userName: 'Sandesh Bhujbal',
                userId: '2'
            }],
			input: '',
			width: '30%',
			property: '',
		}
	},
	methods: {
        ...mapMutations('utils', ['CURRENT_USER_DATA']),
		handleCreateInboundOrder () {},
        userChanges ({value}) {
            this.CURRENT_USER_DATA(value)
            localStorage.setItem("currenUser", value);
            this.$router.push({
                name: 'PageView',
            })
        }
	},
	created () {

    },
	components: { BaseIcon }
}
