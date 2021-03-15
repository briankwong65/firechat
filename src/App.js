import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebaseConfig from './firebaseConfig.json';

import SignIn from './components/SignIn';
import ChatRoom from './components/ChatRoom';
import SignOut from './components/SignOut';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();
const firestore = firebase.firestore();

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className='App'>
      <header>
        <h1>🔥Firechat</h1>
        <SignOut auth={auth} />
      </header>
      <section>
        {user ? (
          <ChatRoom firestore={firestore} auth={auth} />
        ) : (
          <SignIn auth={auth} />
        )}
      </section>
    </div>
  );
};

export default App;
