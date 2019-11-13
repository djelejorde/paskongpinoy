<template>
  <div>
    <HeroSection class="h-screen" />
    <CountdownSection class="h-screen bg-white z-10" />
    <ActivitiesSection class="h-screen bg-white z-10" />
    <!-- <DetailsSection /> -->
  </div>
</template>

<script>
import HeroSection from '~/components/sections/Hero'
import CountdownSection from '~/components/sections/Countdown'
import DetailsSection from '~/components/sections/Details'
import ActivitiesSection from '~/components/sections/Activities'

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
