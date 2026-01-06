<template>
  <BaseModal :isOpen="isOpen" size="3xl" @close="onClose">
    <template #title>
      {{ $t('jobs.application.general.title') }}
    </template>

    <template #description>
      <p> {{ $t('jobs.application.general.copy') }}</p>
    </template>

    <template #content>

      <Form novalidate @submit="onSubmit" :validation-schema="schema" class="max-w-md mx-auto rounded-lg">

        <!-- first name field -->
        <div class="mb-4">
          <label for="firstName" class="block text-sm font-medium text-muted-foreground mb-1">
            {{ $t('jobs.application.general.firstName') }}
          </label>
          <Field as="input" required name="firstName" type="text" id="firstName" autocomplete="given-name"
            class="w-full border bg-background border-border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            :placeholder="$t('jobs.application.general.placeholder.firstName')" />
          <ErrorMessage name="firstName" v-slot="{ message }">
            <small class="text-red-500">{{ message }}</small>
          </ErrorMessage>
        </div>

        <!-- last name field -->
        <div class="mb-4">
          <label for="lastName" class="block text-sm font-medium text-muted-foreground mb-1">
            {{ $t('jobs.application.general.lastName') }}
          </label>
          <Field as="input" required name="lastName" type="text" id="lastName" autocomplete="family-name"
            class="w-full border bg-background border-border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            :placeholder="$t('jobs.application.general.placeholder.lastName')" />
          <ErrorMessage name="lastName" v-slot="{ message }">
            <small class="text-red-500">{{ message }}</small>
          </ErrorMessage>
        </div>

        <!-- E-Mail field -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-muted-foreground mb-1">
            {{ $t('jobs.application.general.email') }}
          </label>
          <Field as="input" required name="email" type="text" id="email" autocomplete="email"
            class="w-full border bg-background border-border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            :placeholder="$t('jobs.application.general.placeholder.email')" />
          <ErrorMessage name="email" v-slot="{ message }">
            <small class="text-red-500">{{ message }}</small>
          </ErrorMessage>
        </div>

        <!-- salary Field -->
        <div class="mb-4">
          <label for="salary" class="block text-sm font-medium text-muted-foreground mb-1">
            {{ $t('jobs.application.general.salary') }}
          </label>
          <Field as="input" name="salary" type="text" id="salary" autocomplete="off"
            class="w-full border bg-background border-border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            :placeholder="$t('jobs.application.general.placeholder.salary')" />
          <ErrorMessage name="salary" v-slot="{ message }">
            <small class="text-red-500">{{ message }}</small>
          </ErrorMessage>
        </div>

        <!-- file upload Field -->
        <div class="mb-4">
          <label for="cv" class="block text-sm font-medium text-muted-foreground mb-1">
            {{ $t('jobs.application.general.fileUpload') }}
          </label>
          <Field name="cv" v-slot="{ handleChange, handleBlur, errors }" rules="required|fileSize:5000|fileExt: pdf">
            <input id="cv" required type="file" accept=".pdf" @change="handleChange" @blur="handleBlur"
              class="w-full border bg-background border-border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          </Field>
          <ErrorMessage name="cv" v-slot="{ message }">
            <small class="text-red-500">{{ message }}</small>
          </ErrorMessage>
        </div>

        <!-- Submit Button -->
        <!-- <button type="submit" :disabled="isLoading" class="btn btn-primary w-full"> -->
        <button type="submit" class="btn btn-primary w-full">
          <!-- Loading Spinner -->
          <!-- <span v-if="isLoading" -->
          <!-- <span class="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></span> -->
          <span>Absenden</span>
        </button>

      </Form>

    </template>
    <template #footer>

    </template>
  </BaseModal>
</template>

<script>
import BaseModal from './BaseModal.vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { createJobApplicationSchema } from '@/schemas';

export default {
  name: 'JobApplicationModal',
  components: {
    BaseModal,
    Form,
    Field,
    ErrorMessage
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },

  emits: ['close'],

  computed: {
    schema() {
      return createJobApplicationSchema();
    }
  },
  methods: {
    // Close modal
    onClose() {
      this.$emit('close');
    },
    onSubmit(values) {
      console.log('Form submitted with values:', values);
    },
  }
};
</script>