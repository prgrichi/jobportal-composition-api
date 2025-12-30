import { defineStore } from 'pinia';
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from "@/config/firebase";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    authReady: false,
  }),

  getters: {
    isAuthenticated: state => !!state.user,
    userName: state => {
      if (!state.user) return 'Gast';
      return state.user.email?.split('@')[0] ||
        'Gast';
    }
  },

  actions: {
    init() {
      if (this.authReady) return;

      onAuthStateChanged(auth, async (user) => {
        this.user = user;
        if (user) {
          console.log('🔐 User eingeloggt:', user.uid);
          await this.createUserDocument(user);
        }
        this.authReady = true;
      });
    },

    async createUserDocument(user) {
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        console.log(user);
        await setDoc(userRef, {
          uid: user.uid,                    
          email: user.email,
          firstName: '',                   
          lastName: '',                    
          jobTitle: '',                     
          location: '',                    
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
        console.log('✅ User-Dokument erstellt für:', user.uid);
      } else {
        console.log('ℹ️ User-Dokument existiert bereits');
      }
    },

  },
});