import React from 'react';

function Message({ message }) {
    return (
        <div className={`message ${message.type === 'sender' ? 'sender' : ''}`}>
            <div>
                <h5>{message.name} - {message.matricule}</h5>
                <span>{message.time} - {message.date}</span>
            </div>
            <p>{message.text}</p>
        </div>
    );
}

export default Message;
