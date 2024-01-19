// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDKGTlPmj8q8CwKmTdFrfWWwjoXOSCpySg",
  authDomain: "task-1fe02.firebaseapp.com",
  projectId: "task-1fe02",
  storageBucket: "task-1fe02.appspot.com",
  messagingSenderId: "422906774007",
  appId: "1:422906774007:web:02aba7ba474403a30d6ef2",
  measurementId: "G-FJ0L7FW82G"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };

