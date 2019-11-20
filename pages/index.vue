<template>
  <div>
    <HeroSection class="h-screen" />
    <CountdownSection class="screen-white-bg" />
    <ActivitiesSection class="screen-white-bg !z-50" />
    <DetailsSection class="screen-white-bg"/>
    <!-- <RegistrationSection class="screen-white-bg" /> -->
    <FaqsSection class="screen-white-bg" />
    <Footer class="z-10"/>
  </div>
</template>

<script>
import HeroSection from '~/components/sections/Hero'
import CountdownSection from '~/components/sections/Countdown'
import ActivitiesSection from '~/components/sections/Activities'
import DetailsSection from '~/components/sections/Details'
import RegistrationSection from '~/components/sections/Registration'
import FaqsSection from '~/components/sections/Faqs'
import Footer from '~/components/page/Footer'

export default {
  components: {
    HeroSection,
    CountdownSection,
    ActivitiesSection,
    DetailsSection,
    RegistrationSection,
    FaqsSection,
    Footer
  }
}
</script>

<style scoped>
.screen-white-bg {
  @apply .min-h-screen;
  @apply .bg-white;
  @apply .z-10;
}
</style>
