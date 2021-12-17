// import { mapGetters } from 'vuex'

// import authHelper from '@utils/auth-helper'

import BaseIcon from '@/components/base-icon/BaseIcon.vue'

export default {
    name: 'the-header',

    components: {
        BaseIcon
    },

    computed: {
        // ...mapGetters('authentication', ['currentUser'])
    },

    methods: {
        handleLogout () {
            // authHelper.goToLogout()
        }
    }
}
