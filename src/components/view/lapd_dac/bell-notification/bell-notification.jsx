import React, { useState } from "react";
import quitButton from "../../../assets/bell.png";

const NotifBell = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const toggleBox = () => {
        if (isOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setIsOpen(false);
                setIsClosing(false);
            }, 300);
        } else {
            setIsOpen(true);
        }
    };

    return (
        <div className="bellContainer" onClick={toggleBox}>
            <div className={'bellContent'}>
                <img src={quitButton} className="bellLogo" alt="Bell Notif" />
            </div>
            <span>21</span>
            {isOpen && (
                <div className={`notificationBox ${isOpen ? "notificationBoxOpen" : "notificationBoxClose"} ${isClosing ? "notificationBoxClose" : ""}`}>
                    <div className={"notificationBox__content"}>
                        <div>
                            <h5>Notifications</h5>
                        </div>
                        <div className={"containerNotif"}>
                            <div className={"notification"}>
                                <div>
                                    <h5>La direction</h5>
                                    <p>Hier - 14:24</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur. Praesent mauris odio libero arcu id amet molestie id diam. Gravida quam consequat nisi amet morbi eget augue. Aliquam aenean consequat magna nec risus dolor. A fames mauris et et felis. Gravida arcu velit eget sit nulla gravida sapien et.</p>
                            </div>
                            <div className={"notification"}>
                                <div>
                                    <h5>La direction</h5>
                                    <p>Hier - 14:24</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur. Praesent mauris odio libero arcu id amet molestie id diam. Gravida quam consequat nisi amet morbi eget augue. Aliquam aenean consequat magna nec risus dolor. A fames mauris et et felis. Gravida arcu velit eget sit nulla gravida sapien et.</p>
                            </div>
                            <div className={"notification"}>
                                <div>
                                    <h5>La direction</h5>
                                    <p>Hier - 14:24</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur. Praesent mauris odio libero arcu id amet molestie id diam. Gravida quam consequat nisi amet morbi eget augue. Aliquam aenean consequat magna nec risus dolor. A fames mauris et et felis. Gravida arcu velit eget sit nulla gravida sapien et.</p>
                            </div>
                        </div>
                        <p className={"showAll"}>Voir tout les message</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NotifBell;
