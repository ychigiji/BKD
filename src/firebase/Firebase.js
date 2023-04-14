import * as firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyA1OPsAHxuSs5aQ3xRbnHZz0MEH_5ia_T0",
  authDomain: "brandkraft-495ea.firebaseapp.com",
  databaseURL: "https://brandkraft-495ea.firebaseio.com",
  projectId: "brandkraft-495ea",
  storageBucket: "brandkraft-495ea.appspot.com",
  messagingSenderId: "1060911484219",
  appId: "1:1060911484219:web:dd6bde82fa42be28c7bb1e",
  measurementId: "G-NRTYD20LC8"
};

var config = firebase.initializeApp(firebaseConfig);


export default config;
