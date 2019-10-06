<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <HeroSection id="hero" class="hero-section" />
    <WorkSection id="work" class="work-section"/>
    <ClientsSection id="clients" class="clients-section"/>
    <TeamSection id="team" class="team-section"/>
  </v-layout>
</template>

<script>
import HeroSection from '~/components/sections/Hero'
import WorkSection from '~/components/sections/Work'
import ClientsSection from '~/components/sections/Clients'
import TeamSection from '~/components/sections/Team'

export default {
  name: 'Home',
  components: {
    HeroSection,
    WorkSection,
    ClientsSection,
    TeamSection
  }
}
</script>
