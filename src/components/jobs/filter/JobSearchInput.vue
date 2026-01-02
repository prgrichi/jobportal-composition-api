<template>
  <div class="w-full">
    <label class="sr-only" for="job-search">
      {{ $t('jobs.filter.searchLabel') }}
    </label>
    <input id="job-search" :value="modelValue" @input="handleInput" type="text"
      :placeholder="$t('jobs.filter.inputPlaceholder')" class="w-full rounded-xl border border-border px-4 py-2 text-sm
             focus:outline-none focus:ring-2 focus:ring-primary-500/40" />
  </div>
</template>

<script>
export default {
  name: 'JobSearchInput',

  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },

  emits: ['update:modelValue'],

  methods: {
    handleInput(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>