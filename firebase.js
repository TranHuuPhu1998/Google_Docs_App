import firebase  from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAdFIOs-nZ8Ig6MfS53BgFzafLUnlHr7cY",
    authDomain: "docs-yt-1986e.firebaseapp.com",
    projectId: "docs-yt-1986e",
    storageBucket: "docs-yt-1986e.appspot.com",
    messagingSenderId: "466941874673",
    appId: "1:466941874673:web:a21eea0f0bbff86d5ff450",
    measurementId: "G-MMYDEPQD1E"
};

const app = !firebase.apps.length 
            ? firebase.initializeApp(firebaseConfig)
            : firebase.app();

const db = app.firestore();

export {db};
