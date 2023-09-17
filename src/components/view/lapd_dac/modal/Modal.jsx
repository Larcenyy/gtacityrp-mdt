import React, {useState} from "react";
import MapComponent from "../leaflet-map/leaflet-map";
import {officierData} from "../pages/mdt/Tables/officierData";
import {vehicleData} from "../pages/mdt/Tables/vehicleData";

const Modal = ({ children, textBouton, classButton, titlePlaceHolder, title, descrip,
   enableAgentCard, enableButtons, enableMap, enableSearchBar, method, enableVehicleCard }) => {

    const [searchValue, setSearchValue] = useState(""); // Variable d'état pour la valeur de recherche

    // Mise à jour de la valeur de recherche lorsque l'utilisateur tape dans la barre de recherche
    const handleSearchInputChange = (e) => {
        setSearchValue(e.target.value);
    };


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
                    <input className="search-bar"
                           placeholder={titlePlaceHolder ? titlePlaceHolder : "Rechercher un véhicule"}
                           value={searchValue ?? ""}
                           onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <div className="search-icon"></div>
                </div>
            )}
            {enableAgentCard && (
                <div className="search-result cards-clickable">
                    {officierData
                        .filter((officer) => officer.name.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((officer, index) => (
                            <div className="officer__card" data-id={officer.officierID} key={index}>
                                <div className="officer__profile"></div>
                                <div className="officer__informations">
                                    <div className="name">
                                        {officer.name}
                                    </div>
                                    <div className="matricule">
                                        {officer.matricule}
                                    </div>
                                </div>
                                <div className="officer__rank rank__off1"></div>
                            </div>
                        ))}
                </div>
            )}
            {enableVehicleCard && (
                <div className="search-result cards-clickable">
                    {vehicleData
                        .filter((vehicle) => vehicle.name.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((vehicle, index) => (
                            <div className="officer__card" data-id={vehicle.carID}  key={index}>
                                <img style={{ width: "30px" }} src="/assets/icon/citizen/car.svg" alt="Supprimer" />
                                <div className="officer__informations">
                                    <div className="name">
                                        {vehicle.name}
                                    </div>
                                    <div className="matricule">
                                        {vehicle.immatriculation}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            )}
            {enableButtons && (
                <div className="buttons">
                    <button onClick={method} className={classButton ? classButton : "button modify"}>{textBouton ? textBouton : "Ajouter"}</button>
                    <button className="button cancel closeModal">Annuler</button>
                </div>
            )}
            {children}
        </div>
    );
}

export default Modal;