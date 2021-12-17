import Vue from 'vue'
import Vuex from 'vuex'

import utils from '@/store/utils/utils-store'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        utils
    },
    strict: process.env.NODE_ENV !== 'production' // ensures state can't be mutated outside mutation handlers in non-production environments
})
