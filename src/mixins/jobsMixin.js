import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';

export default {
  data() {
    return {
      jobs: [],
      isLoading: false,
      error: null
    };
  },
  methods: {
    async fetchJobs(options = {}) {
      this.isLoading = true;
      this.error = null;

      try {
        const jobsRef = collection(db, 'jobs');
        const queryParams = [jobsRef];

        if (options.orderBy) {
          queryParams.push(orderBy(options.orderBy.field, options.orderBy.direction));
        }
        if (options.limit) {
          queryParams.push(limit(options.limit));
        }

        const q = queryParams.length > 1 ? query(...queryParams) : jobsRef;
        const querySnapshot = await getDocs(q);
        this.jobs = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      } catch (err) {
        console.error('Fehler beim Laden der Jobs:', err);
        this.error = 'Jobs konnten nicht geladen werden. ';
      } finally {
        this.isLoading = false;
      }
    }
  }
};