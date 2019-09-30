<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <HeroSection />
    <WorkSection />
  </v-layout>
</template>

<script>
import Logo from '~/components/elements/icons/Logo'
import HeroSection from '~/components/sections/Hero'
import WorkSection from '~/components/sections/Work'

export default {
  name: 'Home',
  components: {
    Logo,
    HeroSection,
    WorkSection
  }
}
</script>
