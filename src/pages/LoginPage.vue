<template>
  <section class="py-12">
    <div class="max-w-md mx-auto px-4">
      <h1 class="text-2xl font-semibold text-neutral-900">{{ $t('auth.login.title') }}</h1>
      <p class="mt-2 text-neutral-600">
        {{ $t('auth.login.subTitle') }}
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