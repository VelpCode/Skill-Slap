
import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBposp_sjRUotmYOSDbecKeYeSq-b0SH1o",
    authDomain: "skillslap-e3176.firebaseapp.com",
    databaseURL: "https://skillslap-e3176-default-rtdb.firebaseio.com",
    projectId: "skillslap-e3176",
    storageBucket: "skillslap-e3176.appspot.com",
    messagingSenderId: "360614875504",
    appId: "1:360614875504:web:cdaad7e400f1bde5b1ffb5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(app);