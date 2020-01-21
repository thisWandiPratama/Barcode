import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBlDdzMauMaYGsIM6SzEXBH2Vh15sSubto",
    authDomain: "bela-34447.firebaseapp.com",
    databaseURL: "https://bela-34447.firebaseio.com",
    projectId: "bela-34447",
    storageBucket: "bela-34447.appspot.com",
    messagingSenderId: "304852559939",
    appId: "1:304852559939:web:dfe7d6d6679e0695b38cf6",
    measurementId: "G-FWW1J3NSHR"
};
let app = firebase.initializeApp(firebaseConfig);
export const db = app.database();