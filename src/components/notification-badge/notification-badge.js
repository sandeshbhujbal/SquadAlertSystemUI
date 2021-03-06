import BaseIcon from '@/components/base-icon/BaseIcon.vue'
import Notification from '@/components/notification-badge/NotificationBadge.vue'

import { mapGetters, mapMutations } from 'vuex'

export default {
	name: 'the-header',

	data () {
		return {}
	},

	components: {
		BaseIcon,
		Notification
	},

	computed: {
		...mapGetters('pageSettingsStore', ['getNotificationForCount'])
	},

	created () {},

	methods: {
		...mapMutations('utils', ['CURRENT_USER_DATA']),
		routeToNotificationListing () {
			this.$router.push({
                name: 'MyNotification',
            })
		}
	}
}
