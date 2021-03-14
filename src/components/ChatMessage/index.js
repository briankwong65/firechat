import React from 'react';
import * as styles from './styles.module.scss';
import classNames from 'classnames';

const ChatMessage = (props) => {
    const { auth, message } = props;
    const { text, uid, photoURL } = message;

    return (
        uid === auth.currentUser.uid ?
        <div className={classNames(styles.message, styles.sent)}>
            <img className={styles.userIcon} src={photoURL} />
            <div className={styles.text}>{text}</div>
        </div>
        :
        <div className={classNames(styles.message, styles.received)}>
            <img className={styles.userIcon} src={photoURL} />
            <div className={styles.text}>{text}</div>
        </div>
    );
};

export default ChatMessage;