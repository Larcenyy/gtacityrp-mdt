import MessageContainer from "./MessageContainer";
import {messages} from "./DataTest";
import React from "react";

const ContainerCom = () => {
    return (
        <div className={"containerCom"}>
            <div className={"containerCom__top"}>
                <h5>Communication interne</h5>
            </div>

            {/* Message Container de la communication interne */}
            <MessageContainer messages={messages}/>

            <div className={"sendMessageContainer"}>
                <input type="text"
                       placeholder={"Communiquer un message aux unités en patrouilles"}/>
                <img style={{width: "15px", cursor: "pointer"}} src="/assets/icon/send.svg"
                     alt="Soumettre"/>
            </div>
        </div>
    )
}

export default ContainerCom;