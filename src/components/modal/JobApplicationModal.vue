<template>
  <BaseModal :isOpen="isOpen" @close="onClose">
    <template #title>
      Bewerbung
    </template>

    <template #description>
      <p>Hier bewerben Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, aperiam, consequatur labore
        ducimus
        minus accusamus officia exercitationem veniam possimus numquam ab corrupti minima illum odio ut adipisci nihil
        harum aliquam!</p>
    </template>

    <template #footer>
      footer
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from './BaseModal.vue';

export default {
  name: 'JobApplicationModal',

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
    // goToLogin() {
    //   this.$emit('close');
    //   this.$router.push('/login');
    // }
  }
};
</script>