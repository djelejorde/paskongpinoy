<template>
  <div>
    <HeroSection class="h-screen" />
    <CountdownSection class="h-screen bg-white z-10" />
    <ActivitiesSection class="bg-white z-10" />
    <DetailsSection class="h-screen z-10"/>
  </div>
</template>

<script>
import HeroSection from '~/components/sections/Hero'
import CountdownSection from '~/components/sections/Countdown'
import ActivitiesSection from '~/components/sections/Activities'
import DetailsSection from '~/components/sections/Details'

export default {
  components: {
    HeroSection,
    CountdownSection,
    ActivitiesSection,
    DetailsSection
  }
}
</script>

<style scoped>
</style>
