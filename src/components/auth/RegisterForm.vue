<template>
  <AuthForm mode="register" />
</template>

<script>
import AuthForm from './AuthForm.vue';

export default {
  name: 'RegisterForm',
  components: {
    AuthForm
  }
}
</script>