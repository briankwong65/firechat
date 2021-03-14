import React from 'react';
import './App.css';
import _ from 'lodash';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

import SignIn from './components/SignIn';
import ChatRoom from './components/ChatRoom';
import SignOut from './components/SignOut';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDhW1eBzXFfRbj5UMBd7BkAiBlVvMVJ7r0',
    authDomain: 'quick-chat-2a210.firebaseapp.com',
    projectId: 'quick-chat-2a210',
    storageBucket: 'quick-chat-2a210.appspot.com',
    messagingSenderId: '958632476247',
    appId: '1:958632476247:web:346bd06e8c92fc772c2d12',
    measurementId: 'G-7CMCER6ENC',
  });
} else {
  firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();
const firestore = firebase.firestore();

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className='App'>
      <header></header>
      <section>{user ? <ChatRoom firestore={firestore}/> : <SignIn auth={auth} />}</section>
    </div>
  );
};

export default App;
