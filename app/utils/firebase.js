import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAB42DGZBxkSRPXnjYU6bHb068dlYHomTE",
  authDomain: "pettyfrontprc391.firebaseapp.com",
  databaseURL: "https://pettyfrontprc391.firebaseio.com",
  projectId: "pettyfrontprc391",
  storageBucket: "pettyfrontprc391.appspot.com",
  messagingSenderId: "310241891570",
  appId: "1:310241891570:web:af6ff8aef6e9f8506dec6b",
  measurementId: "G-M1RXWLDRP0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const storage = firebase.storage();
export  {
  storage, firebase as default
}
