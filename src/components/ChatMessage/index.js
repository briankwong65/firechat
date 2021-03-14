import React from 'react';
import * as styles from './styles.module.scss';

const ChatMessage = (props) => {
    const { text, uid } = props.message;
    return <p>{text}</p>;
};

export default ChatMessage;