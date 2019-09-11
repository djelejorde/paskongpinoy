<template>
  <v-layout
    column
    justify-center
    align-center
  >
      <v-col 
        cols=12 
        class="pa-0"
      >
        <v-parallax
          class="bottom-left-gradient" 
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        >
          <div class="text-center">
            <logo />
            <p class="text-white mt-3">"EMPOWER THE SOUTH WITH US"</p>
            <v-btn>
              VIEW WORK
            </v-btn>
          </div>
        </v-parallax>
      </v-col>
  </v-layout>
</template>

<script>
import Logo from '~/components/elements/icons/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
  .bottom-left-gradient {
    background: -moz-linear-gradient(45deg,  rgba(255, 0, 64, 0.65) 0%, rgba(255, 0, 64,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(45deg,  rgba(255, 0, 64,0.65) 0%,rgba(255, 0, 64,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(45deg,  rgba(255, 0, 64,0.65) 0%,rgba(255, 0, 64,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  }
</style>
