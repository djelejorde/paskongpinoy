<template>
    <v-app-bar
        fixed
        app
        hide-on-scroll
        class="black"
    >
      <v-app-bar-nav-icon class="!none">
        <HeroLogo class="hero-logo ml-5 !lg:inline-block"/>
      </v-app-bar-nav-icon>
      
      <v-toolbar-title class="!pl-0 !lg:pl-5">
        <Logo class="d-block header-logo"/>
      </v-toolbar-title>

      <v-spacer />

      <v-btn
        class="mr-1"
        icon
        @click.stop="toggleDrawer"
      >
        <v-icon class="icon-menu white--text" />
      </v-btn>
    </v-app-bar>
</template>
<script>
import Logo from '~/components/elements/icons/HeaderLogo'
import HeroLogo from '~/components/elements/icons/HeroLogo'

export default {
    name: 'Header',
    components: { Logo, HeroLogo },
    data () {
        return {
            rightDraw: this.rightDrawer
        }
    },
    props: {
        rightDrawer: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggleDrawer () {
            this.rightDraw = !this.rightDraw

            this.$emit('toggleMenu', this.rightDraw)
        }
    }
}
</script>

<style scoped>
    .header-logo {
        width: 150px;
    }
    .hero-logo {
        width: 40px;
    }
</style>