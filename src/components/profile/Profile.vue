<template>
  <section>
    <div class="max-w-app mx-auto px-4">

      <div class="mb-8">
        <h1 class="text-2xl font-bold text-neutral-900 mb-2">
          {{ $t('profile.title') }}
        </h1>
        <p>{{ $t('profile.subtitle') }}</p>
      </div>

      <div v-if="loading" class="text-center py-20">
        <p class="text-gray-600">Lädt... </p>
      </div>

      <div v-else class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center gap-4 mb-6">
          <div>
            <h1 class="text-2xl font-bold">{{ displayName }}</h1>
            <p v-if="profile.jobTitle" class="text-gray-600">{{ profile.jobTitle }}</p>
          </div>
        </div>

        <div class="space-y-3">
          <div class="flex">
            <span class="w-32 text-gray-600">E-Mail:</span>
            <span>{{ profile.email || '—' }}</span>
          </div>

          <div class="flex">
            <span class="w-32 text-gray-600">Name:</span>
            <span>{{ displayName }}</span>
          </div>

          <div class="flex">
            <span class="w-32 text-gray-600">Job-Titel:</span>
            <span>{{ profile.jobTitle || '—' }}</span>
          </div>

          <div class="flex">
            <span class="w-32 text-gray-600">Standort:</span>
            <span>{{ profile.location || '—' }}</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
import { useProfileStore } from '@/stores/user/profile';
import { useAuthStore } from '@/stores/auth/auth';

export default {
  name: 'Profile',

  computed: {
    profileStore() {
      return useProfileStore();
    },
    authStore() {
      return useAuthStore();
    },
    loading() {
      return this.profileStore.loading;
    },

    profile() {
      return this.profileStore.profile || {};
    },

    displayName() {
      const first = this.profile.firstName || '';
      const last = this.profile.lastName || '';
      const name = `${first} ${last}`.trim();
      return name || 'Unbekannt';
    },
  },

  mounted() {
    if (this.authStore.user) {
      this.profileStore.loadProfile(this.authStore.user.uid);
    }
  }
};
</script>