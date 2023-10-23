import React, {Component, useEffect, useState} from "react";
import BoxFiche from "../../boxFiche/boxFiche";
import ListeCitoyen from "./ListeCitoyen/liste-citoyen";
import InfoCitoyen from "./InfoCitoyen/info-citoyen";
import { attachModalListeners } from "../../../../../dist/js/modalToogle";
import { listeCitoyenData } from "./ListeCitoyen/listeCitoyenData";
import { useLocation } from "react-router-dom";

const PageFicheCitizen = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const idURL = searchParams.get('id') || ''; // Utilisez le nom du citoyen ou une valeur par défaut
    const getUrl = window.location.href;
    const isLafd = getUrl.includes("lafd");


    const [selectedCitizenId, setSelectedCitizenId] = useState(idURL ? parseInt(idURL) : null);

    const handleCitizenSelect = (citizenId) => {
        setSelectedCitizenId(citizenId);
    };

    useEffect(() => {
        attachModalListeners();
        document.addEventListener('onDelete', () => {
            setSelectedCitizenId(null);
        });
    }, []);


    return (
        <>
            <BoxFiche title={isLafd ? "Fiches des patients" : "Fiche des citoyens"} classSpec={"app__content app__home"}>
                <div className="citizenContainer">
                    <div className="citizen-left">
                        <ListeCitoyen onCitizenSelect={handleCitizenSelect} />
                    </div>
                    <div className="citizen-right">
                        {selectedCitizenId !== null ? (
                            <InfoCitoyen
                                citizenId={selectedCitizenId}
                                citizenDataProp={listeCitoyenData.find(citizen => citizen.citizenId === selectedCitizenId)}
                            />
                        ) : (
                            <div className={"notOpened"}>
                                <h4>Aucune fiche citoyen sélectionnée</h4>
                            </div>
                        )}
                    </div>
                </div>
            </BoxFiche>
        </>
    );
};

export default PageFicheCitizen;
