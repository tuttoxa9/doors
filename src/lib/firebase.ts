```javascript
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAmDcb4Mpuz8-BihRcGmcPuwv9TR78MjF0",
  authDomain: "doors-8531d.firebaseapp.com",
  projectId: "doors-8531d",
  storageBucket: "doors-8531d.appspot.com",
  messagingSenderId: "1010091745434",
  appId: "1:1010091745434:web:a07b88554757541dcf7f23",
  measurementId: "G-0L57FE34HY"
}

// Инициализируем Firebase
const app = initializeApp(firebaseConfig)

// Экспортируем сервисы
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app
```
