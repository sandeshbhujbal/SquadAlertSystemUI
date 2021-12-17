// import { mapActions, mapState } from 'vuex'

import SideMenu from '@/components/side-menu/SideMenu.vue'
import TheHeader from '@/components/the-header/TheHeader.vue'
import TheFooter from '@/components/the-footer/TheFooter.vue'


// import Loader from '@shared/loader/Loader.vue'

export default {
    name: 'oms-app',

    components: {
        SideMenu,
        TheHeader,
        TheFooter
    },

    // computed: {
    //     ...mapState('loader', ['loadingCount'])
    // },

    // async created () {
    //     await this.fetchCurrentUser()
    //     this.fetchSystemParamValueData('MIDDLEWARE_TOGGLE')
    // },

    methods: {
        // ...mapActions('authentication', ['fetchCurrentUser']),

        // ...mapActions('systemParam', ['fetchSystemParamValue']),

        // ...mapActions('loader', [
        //     'showLoader',
        //     'hideLoader'
        // ]),

        async fetchSystemParamValueData (key) {
            this.showLoader()

            const payload = {
                params: { key }
            }

            try {
                await this.fetchSystemParamValue(payload)
            } catch (e) {
                console.log(e)
            } finally {
                this.hideLoader()
            }
        }
    }
}
