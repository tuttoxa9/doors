import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyDYw0nAtJ51i5eSi-KFjKYlV3CttdBkJPc",
  authDomain: "doors-24bf2.firebaseapp.com",
  projectId: "doors-24bf2",
  storageBucket: "doors-24bf2.firebasestorage.app",
  messagingSenderId: "885264700582",
  appId: "1:885264700582:web:4698ca161e19b41bfd9067",
  measurementId: "G-5M6BG83ZGS"
}

// Инициализируем Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

// Экспортируем сервисы
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app
