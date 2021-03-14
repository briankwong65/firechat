import React from 'react';
import * as styles from './styles.module.scss';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const SignOut = (props) => {
    const { auth } = props;

    return (
      auth.currentUser && <ExitToAppIcon fontSize="large" className={styles.signOutBtn} onClick={() => auth.signOut()}/>
    );
};

export default SignOut;