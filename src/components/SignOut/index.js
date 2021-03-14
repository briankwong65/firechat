import React from 'react';
import * as styles from './styles.module.scss';

const SignOut = (props) => {
    const { auth } = props;

    return (
      auth.currentUser && <button className={styles.signOutBtn} onClick={() => auth.signOut()}>Sign Out</button>
    );
};

export default SignOut;