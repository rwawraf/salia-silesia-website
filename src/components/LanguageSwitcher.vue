<template>
    <div style="display: inline-block">
        <b-dropdown id="dropdown-1" right :text="`${$i18n.locale.toUpperCase()}`">
            <b-dropdown-item-button><a href="#" @click.prevent="setLocale('de')"><b>DE</b></a></b-dropdown-item-button>
            <b-dropdown-item-button><a href="#" @click.prevent="setLocale('pl')"><b>PL</b></a></b-dropdown-item-button>

            <!-- <b-dropdown-item><a href="#" @click.prevent="de">DE</a></b-dropdown-item>
            <b-dropdown-item><a href="#" @click.prevent="pl">PL</a></b-dropdown-item>
            <b-dropdown-item><a href="#" @click="en">EN</a></b-dropdown-item> -->
        </b-dropdown>
    </div>
</template>

<script>
import i18n from '../i18n';

export default {
    methods: {
        setLocale(locale) {
            this.$i18n.locale = locale;
            i18n.locale = locale;
            this.$router.push({
                params: { lang: locale }
            })
            this.$store.dispatch('changeLanguage', locale)
        },

        de: function () {
            this.$store.dispatch('changeLanguage', 'de')
        },

        pl: function () {
            this.$store.dispatch('changeLanguage', 'pl')
        }
    }
}
</script>