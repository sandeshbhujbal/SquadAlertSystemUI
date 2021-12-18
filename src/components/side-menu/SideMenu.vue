<template>
    <div
        v-if="currentUser"
        v-show="showMenu"
        class="the-menu"
        :class="{
            'the-menu__collapsed': isSideMenuCollapsed
        }"
    >
        <!-- LOGO AND APP NAME -->
        <div class="the-menu__header header">
            <router-link to="/">
                <img
                    :src="logo"
                    class="header__logo"
                >

                <div
                    v-show="!isSideMenuCollapsed"
                    class="header__app-name font-bold">
                    SPM
                </div>
            </router-link>
        </div>

        <!-- MENU -->
        <ul class="the-menu__menu-list menu-list">
            <template v-for="menu in menus">
                <!-- MENU WITHOUT SUBMENUS -->
                <router-link
                    v-if="!menu.subMenuList"
                    :key="menu.label"
                    class="menu-list__item item item--hoverable font-bold row ai-center"
                    :to="{ name: menu.routeName }"
                    @click.native="closeSubmenu"
                >
                    <img
                        :src="menu.icon"
                        class="item__icon"
                    >

                    <div
                        v-show="!isSideMenuCollapsed"
                        class="item__label"
                    >
                        {{ menu.label }}
                    </div>
                </router-link>

                <!-- MENU WITH SUBMENUS -->
                <template v-else>
                    <li
                        :key="menu.label"
                        class="menu-list__item menu-list__item--has-child item font-bold"
                        @click="toggleSubMenu(menu)"
                    >
                        <div
                            class="item item--hoverable row ai-center"
                            :class="{ 'router-link-active': isSubmenuActive(menu) }"
                        >
                            <img
                                :src="menu.icon"
                                class="item__icon"
                            >

                            <div
                                v-show="!isSideMenuCollapsed"
                                class="item__label"
                            >
                                {{ menu.label }}
                            </div>

                            <base-icon
                                class="item__chevron"
                                :class="{ 'item__chevron--open': menu.isOpen }"
                                color="#fff"
                                icon-name="ChevronDown"
                            />
                        </div>

                        <!-- SUBMENU -->
                        <ul
                            :key="`${menu.label}-submenu-list`"
                            :class="getClassForSubmenu(menu)"
                            @click.stop
                        >
                            <router-link
                                v-for="subMenu in menu.subMenuList"
                                class="submenu-list__item item item--hoverable row ai-center"
                                :key="subMenu.label"
                                exact-path
                                :to="{ name: subMenu.routeName }"
                                @click.native="closeSubmenu(true)"
                            >
                                <div class="item__label">
                                    {{ subMenu.label }}
                                </div>
                            </router-link>
                        </ul>
                    </li>
                </template>
            </template>
        </ul>

        <!-- TOGGLE MENU BTN -->
        <BliButton
            class="the-menu__toggle-btn toggle-btn"
            ghost
            icon
            @click="toggleMenu"
        >
            <base-icon
                icon-name="Hamburger"
                type="info"
                class="toggle-btn__icon"
            />
        </BliButton>
    </div>
</template>

<script src="./side-menu.js"></script>

<style lang="scss" scoped>
    .horn-size {
        size: 230px;
    }
    .the-menu {
        position: relative;
        background-color: #FE5F55;;
        color: #fff;
        padding: 10px $spacing-s;
        width: $spacing-menu-width;
        // height: 100vh;
        transition: width 0.3s;

        .toggle-btn {
            position: absolute;
            top: 10px;
            right: -50px;
            z-index: $z-index-menu-toggle-btn;

            &__icon {
                height: 2.4rem;
                width: 2.4rem;
            }
        }

        .header {
            font-size: 3.2rem;
            height: 12vh;
            overflow: hidden;

            a {
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                line-height: 1.13;
            }

            &__logo {
                margin-right: $spacing-xxs;
            }

            &__app-name {
                color: #EEF5DB;
            }
        }

        .menu-list {
            // 12 vh from header height and 20px from padding top+bottom (both is 10px)
            height: calc(100vh - 12vh - 20px);

            .menu-list__item--has-child.item {
                position: relative;
                padding: 0;
            }

            .item {
                padding: 0 $spacing-s;
                min-height: 42px;
                margin: $spacing-xxs 0;
                color: #4F6367;
                border-radius: 8px;
                cursor: pointer;
                transition: background-color 0.3s;

                .router-link-active,
                &.router-link-active,
                &--hoverable:hover { // router-link-active class is provided by vue and attaches to respective element automatically
                    background-color: #EEF5DB;
                }

                &__icon {
                    margin-right: $spacing-xs;
                }

                &__label {
                    white-space: nowrap;
                }

                &__chevron {
                    margin-left: auto;
                    transition: transform ease .3s;

                    &--open {
                        transform: rotate(180deg);
                    }
                }
            }

            .submenu-list {
                position: relative;
                overflow: hidden;
                max-height: 0;
                transition: max-height ease .3s;
                margin-top: -4px;

                .item {
                    margin-left: $spacing-xxl-2;
                    width: 164px;
                }

                &__item {
                    display: flex;
                }

                &--active {
                    max-height: 200px;
                }

                &--no-transition {
                    transition: none;
                }
            }

            .floating-submenu-list {
                position: absolute;
                overflow: hidden;
                top: 0;
                left: 58px;
                max-height: 0;
                transition: max-height ease .3s;
                background-color: #FE5F55;
                border-radius: 8px;
                z-index: $z-index-menu-floating-submenu;

                .item {
                    margin: $spacing-s;
                    width: 164px;
                }

                &__item {
                    display: flex;
                }

                &--active {
                    max-height: 200px;
                }

                &--no-transition {
                    transition: none;
                }
            }
        }

        &__collapsed {
            width: $spacing-menu-width-collapsed;

            .header {
                &__logo {
                    margin-right: 0;
                }
            }

            .menu-list {
                .item__icon {
                    margin-right: 0;
                }
            }
        }
    }
</style>