import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCCdpeX_mmgG12Ersn-zfNjcIvegtUt9s4",
    authDomain: "linkedin-clone-react-bde60.firebaseapp.com",
    projectId: "linkedin-clone-react-bde60",
    storageBucket: "linkedin-clone-react-bde60.appspot.com",
    messagingSenderId: "1020508619634",
    appId: "1:1020508619634:web:e78ef0ecbf38b33a8e53eb"
  };

  const Firebase = firebase.initializeApp(firebaseConfig)
  export const db = Firebase.firestore()
  export const auth = Firebase.auth()
