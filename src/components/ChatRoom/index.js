import React from 'react';
import * as styles from './styles.module.scss';

import { useCollectionData } from 'react-firebase-hooks/firestore';

import ChatMessage from '../ChatMessage';

const ChatRoom = (props) => {
    const { firestore } = props;

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, { idField: 'id' });

    return (
        <>
        <p>hello world</p>
        <div>
            {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        </div>
        </>
    );
};

export default ChatRoom;