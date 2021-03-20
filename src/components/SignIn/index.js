import React from 'react';
import * as styles from './styles.module.scss';

import firebase from 'firebase/app';

const SignIn = (props) => {
  const { auth } = props;

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <button className={styles.signInBtn} onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
};

export default SignIn;
