import React from "react";
import {useParams} from "react-router-dom";

import Header from "./pages/header/lapd-header";
import ShowCurrentPage from "./ShowCurrentPage";
import NotifBell from "./bell-notification/bell-notification";

const TabletteContent = () => {
    const { page } = useParams(); // Récupère la valeur du paramètre de l'URL

    return (
        <div className="tablet-content">
            <Header />
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
