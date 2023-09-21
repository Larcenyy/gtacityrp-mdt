import React, {useState} from 'react';
import Message from './Message';
import {messageData} from "./messageData";

function MessageContainer({ messages }) {
    const [messageList, setMessageList] = useState(messageData);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Nombre d'éléments par page

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentMessageList = messageList.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className={"containerCom__messageContainer"}>
            {currentMessageList.map((message, index) => (
                <div key={index} className={`containerMessage_${message.type}`}>
                    <Message message={message} />
                </div>
            ))}
            <ul className="pagination">
                {Array.from({ length: Math.ceil(messageList.length / itemsPerPage) }, (_, index) => (
                    <li key={index} className={currentPage === index + 1 ? "active" : ""}>
                        <button onClick={() => paginate(index + 1)}>{index + 1}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MessageContainer;
