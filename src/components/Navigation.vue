<template>
    <header>
        <nav class="container">
            <div class="branding">
                <router-link class="header" :to="{ name: 'Home' }">
                    <img class="band-navbar" src="../assets/navbarImages/band.jpg"/>
                    <img class="brand-logo" alt="salia-wappen" src="../assets/navbarImages/salia-wappen.png"/>
                    Salia Silesia
                </router-link>
            </div>
            <div class="nav-links">
                <ul v-show="!mobile">
                    <router-link class="link" :to="`/${$i18n.locale}/`">{{ $t('navigation.home') }}</router-link>
                    <router-link class="link" :to="`/${$i18n.locale}/about-us`">{{ $t('navigation.aboutUs') }}</router-link>
                    <router-link class="link" :to="`/${$i18n.locale}/program`">{{ $t('navigation.program') }}</router-link>
                    <router-link class="link" :to="`/${$i18n.locale}/posts`">{{ $t('navigation.posts') }}</router-link>
                    <router-link class="link" :to="`/${$i18n.locale}/contact`">{{ $t('navigation.kontakt') }}</router-link>
                    <language-switcher class="lang-dropdown"></language-switcher>
                </ul>
            </div>
        </nav>
        <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile"/>
        <transition name="mobile-nav">
            <ul class="mobile-nav" v-show="mobileNav">
                <img class="brand-logo-mobile" alt="salia-wappen" src="../assets/navbarImages/salia-wappen.png"/>
                <router-link class="link link-light" :to="`/${$i18n.locale}/`">{{ $t('navigation.home') }}</router-link>
                <router-link class="link link-light" :to="`/${$i18n.locale}/about-us`">{{ $t('navigation.aboutUs') }}</router-link>
                <router-link class="link link-light" :to="`/${$i18n.locale}/program`">{{ $t('navigation.program') }}</router-link>
                <router-link class="link link-light" :to="`/${$i18n.locale}/posts`">{{ $t('navigation.posts') }}</router-link>
                <router-link class="link link-light" :to="`/${$i18n.locale}/contact`">{{ $t('navigation.kontakt') }}</router-link>
            </ul>
        </transition>
    </header>
</template>

<script>
import menuIcon from '../assets/Icons/bars-regular.svg';
import LanguageSwitcher from './LanguageSwitcher.vue';

export default {
    name: 'navigation',
    components: {
        menuIcon,
        LanguageSwitcher,
    },
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        };
    },
    created() {
        window.addEventListener('resize', this.checkScreenWidth);
        this.checkScreenWidth();
    },
    methods: {
        checkScreenWidth() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 1200) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        },

        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
    }
};
</script>

<style lang="scss" scoped>
header {
    background-color: #fff;
    padding: 0 25px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    z-index: 99;

    .link {
        font-weight: 500;
        padding: 0 25px;
        transition: .3s color ease;
        padding-bottom: 8px;
        

        &:hover {
            color: orange;
            border-bottom: groove orange 8px;
            transition: .3s border-bottom ease;
        }
    }


    nav {
        display: flex;
        padding: 25px 0;

        .branding {
            display: flex;
            align-items: center;
        
            .header {
                font-weight: 900;
                font-size: 18px;
                color: #000;
                text-decoration: none;
            }
        }



        .nav-links {
        position: relative;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: flex-end;

        ul {
            margin-top: 15px;
            margin-right: 24px;

            .link {
                margin-right: 24px;
            }

            .link:last-child {
                margin-right: 0;
            }
        }

    }
    }

    .menu-icon {
        cursor: pointer;
        position: absolute;
        top: 50px;
        right: 25px;
        height: 25px;
        width: auto;
    }

    .brand-logo {
        cursor: pointer;
        flex: 1;
        position: relative;
        left: -10px;
        top: -5px;
        height: 80px;
        width: auto;
        margin-right: 20px;
    }

    .brand-logo-mobile {
        height: 80px;
        width: 80px;
        transform: translate(80%, 0%);
        margin-bottom: 20px;
    }

    .band-navbar {
        width: 100%;
        height: 20px;
        left: 0;
        top: 110px;
        position: absolute;        
    }

    .mobile-nav {
        text-align: center;
        padding: 20px;
        width: 70%;
        max-width: 250px;
        display: flex;
        flex-direction: column;
        position: fixed;
        height: 100%;
        background-color: #303030;
        top: 0;
        left: 0;
        z-index: 200;

        .link {
            padding: 15px 0;
            color: #fff;

            &:hover {
                color: orange;
            }
        }
    }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 0.75s ease;
  }

  .mobile-nav-enter {
    transform: translateX(-250px);
  }

  .mobile-nav-enter-to {
    transform: translateX(0);
  }

  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}

</style>