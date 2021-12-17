// import { mapGetters } from 'vuex'

// import authHelper from '@utils/auth-helper'

import BaseIcon from '@/components/base-icon/BaseIcon.vue'
import { mapState, mapMutations } from 'vuex'

export default {
	name: 'the-header',

	data () {
		return {
		}
	},

	components: {
		BaseIcon
	},

	computed: {
        ...mapState('utils', ['currentUser']),
	},

	created () {
	},

	methods: {
        ...mapMutations('utils', ['CURRENT_USER_DATA']),
		handleLogout () {
            this.$router.push({
                name: 'HomePage',
            })
            this.CURRENT_USER_DATA('')
		}
	}
}
