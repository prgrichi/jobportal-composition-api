<template>
  <section class="py-12">
    <div class="max-w-md mx-auto px-4">
      <h1 class="text-2xl font-semibold text-neutral-900">Loginpage</h1>
      <p class="mt-2 text-neutral-600">
        Melde dich an, um gespeicherte Jobs zu sehen.
      </p>
      <LoginForm />
    </div>
  </section>

</template>

<script>
import LoginForm from '@/components/auth/LoginForm.vue';

export default {
  name: 'LoginPage',
  components: {
    LoginForm,
  }
}
</script>

<style scoped></style>