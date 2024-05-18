// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR_iXtVgt59ozg372OCdYHyuOAUmob8JQ",
  authDomain: "resumearchive-e7360.firebaseapp.com",
  projectId: "resumearchive-e7360",
  storageBucket: "resumearchive-e7360.appspot.com",
  messagingSenderId: "543418593341",
  appId: "1:543418593341:web:536afbc1762a9c7ae0ba54",
  measurementId: "G-G41898Z6HK"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export async function firebaseUpload(file, name) {
    const storageRef = ref(storage, name);
    const res = await uploadBytes(storageRef, file);
    return res;
}