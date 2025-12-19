<template>
  <div>
    <HeroSection />
    <WhySection />
    <JobsTeaserSection />
    <InfoStripSection />
    <TechStackSection />
  </div>
</template>

<script>
import HeroSection from '@/components/home/HeroSection.vue';
import WhySection from '@/components/home/WhySection.vue';
import JobsTeaserSection from '@/components/home/JobsTeaserSection.vue';
import InfoStripSection from '@/components/home/InfoStripSection.vue';
import TechStackSection from '@/components/home/TechStackSection.vue';

export default {
  name: 'HomePage',
  components: {
    HeroSection,
    InfoStripSection,
    JobsTeaserSection,
    TechStackSection,
    WhySection
  },
}
</script>

<style scoped></style>