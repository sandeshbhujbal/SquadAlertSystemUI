import {
    mapState,
    mapMutations
} from 'vuex'

import { MENUS } from '@/data/menu-constant.js'

import logo from '@/assets/icons/oms-logo.svg'

import BaseIcon from '@/components/base-icon/BaseIcon.vue'
import Notification from '@/components/notification-badge/NotificationBadge.vue'

export default {
    name: 'side-menu',

    components: {
        BaseIcon,
        Notification
    },

    data () {
        return {
            menus: MENUS,
            isLoadingSideMenuCollapse: false,
            logo
        }
    },

    computed: {
        ...mapState('utils', ['currentUser']),

        showMenu () {
            return !this.$route.meta.hideMenu
        }
    },

    created () {
        this.checkIsCurrentRouteSubMenu()
    },

    methods: {
        ...mapMutations('utils', ['setIsSideMenuCollapsed']),

        checkIsCurrentRouteSubMenu () {
            this.menus.forEach(menu => {
                if (!menu.subMenuList) {
                    return
                }

                const isCurrentMenu = this.isSubmenuActive(menu)

                if (isCurrentMenu) {
                    menu.isOpen = true
                }
            })
        },

        toggleMenu () {
            this.isLoadingSideMenuCollapse = true
            this.setIsSideMenuCollapsed(!this.isSideMenuCollapsed)
            setTimeout(() => {
                this.isLoadingSideMenuCollapse = false
            }, 300)
        },

        isSubmenuActive (menu) {
            return menu.subMenuList
                .some(subMenu => subMenu.routeName === this.$route.name)
        },

        getClassForSubmenu (menu) {
            return {
                'item__submenu-list submenu-list': !this.isSideMenuCollapsed,
                'submenu-list--active': menu.isOpen && !this.isLoadingSideMenuCollapse && !this.isSideMenuCollapsed,
                'item__floating-submenu-list floating-submenu-list': this.isSideMenuCollapsed,
                'floating-submenu-list--active': menu.isOpen && !this.isLoadingSideMenuCollapse && this.isSideMenuCollapsed,
                'sub-menu-list--no-transition floating-submenu-list--no-transition': this.isLoadingSideMenuCollapse
            }
        },

        closeSubmenu (isSubmenu = false) {
            if (!isSubmenu || this.isSideMenuCollapsed) {
                this.menus.forEach(menuItem => { menuItem.isOpen = false })
            }
        },

        toggleSubMenu (menu) {
            // Close all submenu when opening other menu's submenu
            if (!menu.isOpen) {
                this.closeSubmenu()
            }

            menu.isOpen = !menu.isOpen
        }
    }
}
