import Vue from 'vue'
import Vuex from 'vuex'

import utils from './utils'
import pageSettingsStore from './pageSettingsStore'
import calendarSettingsStore from './calendarSettingsStore'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        utils,
        pageSettingsStore,
        calendarSettingsStore
    },
    strict: process.env.NODE_ENV !== 'production' // ensures state can't be mutated outside mutation handlers in non-production environments
})
