<template>
  <section class="py-6 md:py-12">
    <div class="max-w-app mx-auto px-4">
      <Profile />
    </div>
  </section>
</template>

<script>
import Profile from '@/components/profile/Profile.vue';

export default {
  name: 'ProfilePage',
  components: {
    Profile
  }
}
</script>

<style scoped></style>
