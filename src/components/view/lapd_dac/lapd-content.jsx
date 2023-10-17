import React from "react";
import {useLocation, useParams} from "react-router-dom";

import ShowCurrentPage from "./ShowCurrentPage";
import NotifBell from "./bell-notification/bell-notification";
import TabletteHeader from "./pages/header/lapd-header";

const TabletteContent = () => {
    const { page } = useParams(); // Récupère la valeur du paramètre de l'URL
    const location = useLocation();

    const pathSegments = location.pathname.split("/");
    const type = pathSegments[1]; // Le premier segment après le slash

    return (
        <div className="tablet-content">
            <TabletteHeader type={type} />
            <div className="account">
                <div className="welcome">
                    Bienvenue, <span className="username">John Doe</span> !
                </div>
                <div className="buttons">
                    <div className="button">Mon compte</div>
                    <div className="button">Déconnexion</div>
                </div>
            </div>
            <ShowCurrentPage currentPage={page} />
            <NotifBell/>
        </div>
    );
};

export default TabletteContent;
