import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCD6jBDDDmzJo7J2UfqF79gxzl_fqMVY_o",
    authDomain: "expense-manager-b1099.firebaseapp.com",
    databaseURL: "https://expense-manager-b1099.firebaseio.com",
    projectId: "expense-manager-b1099",
    storageBucket: "expense-manager-b1099.appspot.com",
    messagingSenderId: "1040780905615"
  };
  firebase.initializeApp(config);

export const database = firebase.database().ref('expenses/');