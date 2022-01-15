import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MSG_SEND_ID,
    appId: process.env.REACT_APP_ID,
    measurementId:process.env.REACT_APP_MEASUREMENT_ID,
  };

  export default firebase.initializeApp(firebaseConfig);
