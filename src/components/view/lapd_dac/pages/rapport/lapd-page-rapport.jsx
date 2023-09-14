import React, {useState} from "react";
import 'leaflet';
import 'leaflet/dist/leaflet.css';
import {rowsData} from "../mdt/Tables/tableData";
import RapportType from "./rapport-type/rapport-type";
import BoxFiche from "../../boxFiche/boxFiche";
import RapportArrest from "./rapport-type/rapport-arrest/rapport-arrest";
import RapportGAV from "./rapport-type/rapport-gav/rapport-gav";
import RapportSaisie from "./rapport-type/rapport-saisie/rapport-saisie";

const PageRapport = ({type}) => {
    const [selectedRapportType, setSelectedRapportType] = useState(type); // Utilisez la prop 'type' pour définir le rapport sélectionné

    const handleRapportTypeChange = (value) => {
        setSelectedRapportType(value);
    };

    let rapportTitle = "";

    if (selectedRapportType  === 'RapportArrest') {
        rapportTitle = "Rapport d'arrestation";
    } else if (selectedRapportType === 'RapportGAV') {
        rapportTitle = "Rapport de garde à vue";
    } else if (selectedRapportType === 'RapportSaisie') {
        rapportTitle = "Rapport de saisie";
    }

    return (
        <>
            <div className={"container-rapport"}>
                <div className={"container-rapport__content"}>
                    <div className={"container-rapport__content__top"}>
                        <img style={{ width: "18px" }} src="/assets/icon/fiche.png" alt="Supprimer" />
                        <h4>Choisir le type de rapport</h4>
                    </div>
                    {rowsData.map((data, index) => (
                        <RapportType
                            data={data}
                            key={index}
                            onSelect={handleRapportTypeChange}
                        />
                    ))}
                </div>
                {selectedRapportType && (
                    <BoxFiche title={rapportTitle} classSpec={'app__content app__home'} myStyle={'-15px'}>
                        <div className={'rapport-form'}>
                            {selectedRapportType === 'RapportArrest' ? (
                                <RapportArrest />
                            ) : selectedRapportType === 'RapportGAV' ? (
                                <RapportGAV />
                            )
                            : selectedRapportType === 'RapportSaisie' ? (
                                <RapportSaisie />
                            )
                            : null}
                        </div>
                    </BoxFiche>
                )}
            </div>
        </>
    )
}


export default PageRapport;