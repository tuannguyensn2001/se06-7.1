import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBrvB7kWm_jyfzGkLSv7uZXP1k777kQc3Q",
  authDomain: "se06-bbb42.firebaseapp.com",
  projectId: "se06-bbb42",
  storageBucket: "se06-bbb42.appspot.com",
  messagingSenderId: "985433858305",
  appId: "1:985433858305:web:18df214725d7903f063b00"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

