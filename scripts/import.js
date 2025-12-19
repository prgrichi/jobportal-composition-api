const admin = require('firebase-admin');
const fs = require('fs');

// 1. Service Account Key laden
const serviceAccount = require('./serviceAccountKey.json');

// 2. Firebase Admin initialisieren
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// 3. Deine JSON-Daten laden
const jsonData = JSON.parse(fs.readFileSync('./jobs.json', 'utf8'));

// 4. Import-Funktion
async function importToFirestore() {
  try {
    for (const item of jsonData) {
      // Option A: Auto-generierte ID
      await db.collection('jobs').add(item);
      
      // Option B: Eigene ID verwenden (wenn item.id existiert)
      // await db.collection('deine-collection').doc(item.id).set(item);
    }
    console. log('✅ Import erfolgreich!');
  } catch (error) {
    console.error('❌ Fehler beim Import:', error);
  }
}

// 5. Import starten
importToFirestore();