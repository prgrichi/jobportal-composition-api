import { defineStore } from 'pinia';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: null,
    loading: false
  }),

  actions: {
    async loadProfile(userId) {
      this.loading = true;

      try {
        const docRef = doc(db, 'users', userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          this.profile = docSnap.data();
        } else {
          console.error('❌ Profile not found for user:', userId);
        }
      } catch (error) {
        console.error('Error loading profile:', error);
      } finally {
        this.loading = false;
      }
    },

    clearProfile() {
      this.profile = null;
    }
  }
});