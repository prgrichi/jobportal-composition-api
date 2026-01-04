import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
  state: () => ({
    authRequiredModalOpen: false,
    jobApplicationModalOpen: false
  }),

  actions: {
    showAuthRequired() {
      this.authRequiredModalOpen = true;
    },

    hideAuthRequired() {
      this.authRequiredModalOpen = false;
    },

    showJobApplication(jobId) {
      // this.selectedJobId = jobId;
      this.jobApplicationModalOpen = true;
    },

    hideJobApplication() {
      this.jobApplicationModalOpen = false;
      // this.selectedJobId = null;
    }
  }
});