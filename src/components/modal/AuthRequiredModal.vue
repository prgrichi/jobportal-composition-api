<template>
  <BaseModal :isOpen="isOpen" size="md" @close="onClose">
    <template #title>
      {{ $t('modal.authRequired.title') }}
    </template>

    <template #description>
      {{ $t('modal.authRequired.message') }}
    </template>

    <template #footer>
      <button @click="goToLogin" class="btn btn-primary flex-1">
        {{ $t('general.btn.signInNow') }}
      </button>

      <button @click="onClose" class="btn btn-secondary">
        {{ $t('general.btn.cancel') }}
      </button>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from './BaseModal.vue';

export default {
  name: 'AuthRequiredModal',

  components: {
    BaseModal
  },

  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },

  emits: ['close'],

  methods: {
    // Close modal
    onClose() {
      this.$emit('close');
    },

    // Redirect to login page
    goToLogin() {
      this.$emit('close');
      this.$router.push('/login');
    }
  }
};
</script>