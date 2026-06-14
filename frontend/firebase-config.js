import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMn3t5QHpOSVqdAXsf8Bbh5TwXPqYIfpg",
  authDomain: "waterbridge-lms.firebaseapp.com",
  projectId: "waterbridge-lms",
  storageBucket: "waterbridge-lms.firebasestorage.app",
  messagingSenderId: "224313355988",
  appId: "1:224313355988:web:886787fb9402df4f8e9541"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);