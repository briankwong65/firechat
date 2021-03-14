import React from 'react';
import * as styles from './styles.module.scss';

const ChatMessage = (props) => {
    const { auth, message } = props;
    const { text, uid, photoURL } = message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL} />
            <p>{text}</p>
        </div>
    );
};

export default ChatMessage;