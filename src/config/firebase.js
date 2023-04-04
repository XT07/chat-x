import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyApFZ6lmyQHW2AKFHYwLZVIMYif2QanWAk",
  authDomain: "chat-x-1fdc9.firebaseapp.com",
  projectId: "chat-x-1fdc9",
  storageBucket: "chat-x-1fdc9.appspot.com",
  messagingSenderId: "1012730308264",
  appId: "1:1012730308264:web:f6eb2202b8653216d9049d",
  measurementId: "G-D87QSESZ1X"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);