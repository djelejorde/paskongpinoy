<template>
  <v-col 
    cols=12 
    class="pa-0"
  >
    <v-parallax
      id="parallax-hero"
      class="bottom-left-gradient"
      :src="require('@/static/images/hero_bg.jpg')"
    >
      <div class="text-center">
        <Logo class="hero-logo" />
        <p class="text-white my-5 font-secondary display-2 tracking-2 font-weight-bold">"EMPOWER THE SOUTH WITH US"</p>
        <nuxt-link
          style="text-decoration: none; color: inherit"
          class="font-secondary white--text px-8 py-3 font-weight-bold tracking-2 view-work bg-primary"
          color="#eb234b"
          tile
          to="#work"
        >
          VIEW WORK
        </nuxt-link>
      </div>
    </v-parallax>
  </v-col>
</template>

<script>
import Logo from '~/components/elements/icons/HeroLogo'

export default {
  name: 'HeroSection',
  components: {
    Logo
  },
  mounted() {
    document.getElementById('parallax-hero').style.height = '100vh'
  }
}
</script>

<style scoped>
  .hero-logo {
    width: 300px;
  }
  
  .bottom-left-gradient {
    border-bottom: 8px solid #eb234b;  
  }

  .bottom-left-gradient:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    content: "";
    background: -moz-linear-gradient(35deg,  rgba(255, 0, 64, 0.65) 0%, rgba(255, 0, 64,0) 40%); /* FF3.6-15 */
    background: -webkit-linear-gradient(35deg,  rgba(255, 0, 64,0.65) 0%,rgba(255, 0, 64,0) 40%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(35deg,  rgba(255, 0, 64,0.65) 0%,rgba(255, 0, 64,0) 40%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  }

  .view-work {
    -webkit-box-shadow: 0px 4px 4px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 4px 4px 1px rgba(0,0,0,0.75);
    box-shadow: 0px 4px 4px 1px rgba(0,0,0,0.75);
  }
</style>
