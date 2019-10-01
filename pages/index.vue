<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <HeroSection class="hero-section" />
    <WorkSection class="work-section" />
    <ClientsSection class="clients-section"/>
  </v-layout>
</template>

<script>
import Logo from '~/components/elements/icons/Logo'
import HeroSection from '~/components/sections/Hero'
import WorkSection from '~/components/sections/Work'
import ClientsSection from '~/components/sections/Clients'

export default {
  name: 'Home',
  components: {
    Logo,
    HeroSection,
    WorkSection,
    ClientsSection
  }
}
</script>
