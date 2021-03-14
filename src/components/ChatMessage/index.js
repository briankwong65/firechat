import React from 'react';
import * as styles from './styles.module.scss';
import classNames from 'classnames';
import { fromUnixTime, formatRelative  } from 'date-fns';

const ChatMessage = (props) => {
    const { auth, message } = props;
    const { text, uid, photoURL, createdAt } = message;
    const msgSentTime = createdAt && fromUnixTime(createdAt.seconds);
    const relativeTime = msgSentTime && formatRelative(msgSentTime, new Date());

    return (
        uid === auth.currentUser.uid ?
        <div className={classNames(styles.message, styles.sent)}>
            <img className={styles.userIcon} src={photoURL} />
            <div className={styles.text}>{text}
                <div className={styles.sentTime}>  {relativeTime}</div>
            </div>
        </div>
        :
        <div className={classNames(styles.message, styles.received)}>
            <img className={styles.userIcon} src={photoURL} />
            <div className={styles.text}>{text}
                <div className={styles.sentTime}>{relativeTime}</div>
            </div>
        </div>
    );
};

export default ChatMessage;