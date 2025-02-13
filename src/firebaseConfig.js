// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNVmz24wD42mse_oAuPVImNclXlWLhq4Q",
  authDomain: "hunarbazaar-cbfcc.firebaseapp.com",
  projectId: "hunarbazaar-cbfcc",
  storageBucket: "hunarbazaar-cbfcc.appspot.com", // ✅ Fixed storage bucket URL
  messagingSenderId: "747268536753",
  appId: "1:747268536753:web:9ef2977502e0cbc1e02590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; // ✅ Ensure this is exported
