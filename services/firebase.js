// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, doc, setDoc, getDocs, collection, onSnapshot } from "firebase/firestore";


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
export const db = getFirestore(app);

export async function firebaseUpload(file, name) {
  const storageRef = ref(storage, name);
  const res = await uploadBytes(storageRef, file);
  return res;
}

export async function saveResume(data, key) {
  const data_ = await setDoc(doc(db, "resumes", key), data)
  return true;
}

export async function getCvs() {
  const data = [];
  const querySnapshot = await getDocs(collection(db, "resumes"));
  querySnapshot.forEach(doc => doc.exists() && data.push(doc.data()))
  return data;
}



export async function addViews(key) {

}

export async function getPopularTags() {
  const querySnapshot = await getDocs(collection(db, "resumes"));
  const results = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    // Extract specific keys
    const specificData = {
      skills: data.skills,
      // add more keys as needed
    };
    results.push(specificData);
  });
  return mergeAndSortSkills(results);
}

function mergeAndSortSkills(data) {
  // Step 1: Merge all skills into a single array
  const allSkills = [];
  data.forEach(entry => {
    allSkills.push(...entry.skills);
  });

  // Step 2: Count the occurrences of each skill
  const skillCounts = allSkills.reduce((acc, skill) => {
    acc[skill] = (acc[skill] || 0) + 1;
    return acc;
  }, {});

  // Step 3: Sort skills by their occurrence in descending order
  const sortedSkills = Object.entries(skillCounts).sort((a, b) => b[1] - a[1]);

  return sortedSkills;
}