import React from 'react';
import Message from './Message';

function MessageContainer({ messages }) {
    return (
        <div className={"containerCom__messageContainer"}>
            {messages.map((message, index) => (
                <div key={index} className={`containerMessage_${message.type}`}>
                    <Message message={message} />
                </div>
            ))}
        </div>
    );
}

export default MessageContainer;
