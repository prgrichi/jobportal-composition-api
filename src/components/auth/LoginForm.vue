<template>
  <AuthForm mode="login" />
</template>

<script>
import AuthForm from './AuthForm.vue';

export default {
  name: 'LoginForm',
  components: {
    AuthForm
  }
}
</script>

<style scoped></style>