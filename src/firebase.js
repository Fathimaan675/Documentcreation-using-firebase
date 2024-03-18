
import { initializeApp } from "firebase/app";
import    {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBtpDd3U3v2Pbm_ANArsIx361sgWcw2F34",
  authDomain: "docs-documents.firebaseapp.com",
  projectId: "docs-documents",
  storageBucket: "docs-documents.appspot.com",
  messagingSenderId: "807774602147",
  appId: "1:807774602147:web:695021cb3163e97b87d016"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore=getFirestore(app);
  

