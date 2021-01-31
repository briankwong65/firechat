import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firesto

firebase.initializeApp({
  apiKey: "AIzaSyDhW1eBzXFfRbj5UMBd7BkAiBlVvMVJ7r0",
  authDomain: "quick-chat-2a210.firebaseapp.com",
  projectId: "quick-chat-2a210",
  storageBucket: "quick-chat-2a210.appspot.com",
  messagingSenderId: "958632476247",
  appId: "1:958632476247:web:346bd06e8c92fc772c2d12",
  measurementId: "G-7CMCER6ENC"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  
  return (
    <div className='App'>
      <header className='App-header'></header>
    </div>
  );
}

export default App;
