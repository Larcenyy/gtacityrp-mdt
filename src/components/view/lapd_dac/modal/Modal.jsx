import React from "react";
import MapComponent from "../leaflet-map/leaflet-map";

const Modal = ({children, textBouton, classButton, enableTextArea, titlePlaceHolder, title, descrip, enableAgentCard, enableButtons, enableMap, enableSearchBar }) => {


    return (
        <div className="modal-content">
            <div className="title">
                <h1>{title ? title : "Aucune donnée"}</h1>
                <div className="closeModal"></div>
            </div>
            <div>
                <h2 style={{ fontSize: '15px' }}>{descrip ? descrip : ""}</h2>
            </div>
            {enableMap && (
                <div className={"map"} style={{ width: '70vw', height: '300px', overflow: "hidden"}}>
                    <MapComponent />
                </div>
            )}
            {enableSearchBar && (
                <div className="search-container">
                    <input className="search-bar" placeholder={titlePlaceHolder ? titlePlaceHolder : "Rechercher un véhicule"}/>
                    <div className="search-icon"></div>
                </div>
            )}
            {enableAgentCard && (
                <div className="search-result cards-clickable">
                    <div className="officer__card">
                        <div className="officer__profile"></div>
                        <div className="officer__informations">
                            <div className="name">
                                John Doe
                            </div>
                            <div className="matricule">
                                Matricule
                            </div>
                        </div>
                        <div className="officer__rank rank__off1"></div>
                    </div>
                </div>
            )}
            {enableTextArea && (
                <textarea name="editAgenda" cols="10" rows="5"></textarea>
            )}
            {enableButtons && (
                <div className="buttons">
                    <button className={classButton ? classButton : "button modify"}>{textBouton ? textBouton : "Ajouter"}</button>
                    <button className="button cancel closeModal">Annuler</button>
                </div>
            )}
            {children}
        </div>
    );
}

export default Modal;