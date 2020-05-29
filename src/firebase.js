import *as firebase from "firebase";

 var firebaseConfig = {
    apiKey: "AIzaSyAD23XICjtERZW5fJzvcinKddz7VpvUde0",
    authDomain: "react-crud-18fe0.firebaseapp.com",
    databaseURL: "https://react-crud-18fe0.firebaseio.com",
    projectId: "react-crud-18fe0",
    storageBucket: "react-crud-18fe0.appspot.com",
    messagingSenderId: "652373407189",
    appId: "1:652373407189:web:1f66c98990f31fe866f95c"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();