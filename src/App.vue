<template>
  <div class="app-shell">
    <TheHeader />

    <main>
      <ToastContainer />
      <router-view />
    </main>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/layouts/TheHeader.vue'
import TheFooter from '@/layouts/TheFooter.vue'
import ToastContainer from '@/components/ui/ToastContainer.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    ToastContainer
  }
}
</script>
