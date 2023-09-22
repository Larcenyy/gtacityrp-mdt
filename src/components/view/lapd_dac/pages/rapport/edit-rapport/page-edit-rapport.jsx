import {Link, useLocation} from "react-router-dom";
import BoxFiche from "../../../boxFiche/boxFiche";
import {rapportArrest} from "../../fiche_citizen/InfoCitoyen/Rapport/RapportArrest/rapportArrest";
import {listeCitoyenData} from "../../fiche_citizen/ListeCitoyen/listeCitoyenData";
import React from "react";
import {rapportGAV} from "../../fiche_citizen/InfoCitoyen/Rapport/RapportGAV/rapportGAV";
import EditRapportArrest from "./rapport-arrest/edit-rapport-arrest";
import EditRapportGAV from "./rapport-gav/edit-rapport-gav";


function ShowEditRapport({type}) {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id') || ''; // Utilisez le nom du citoyen ou une valeur par défaut

    let rapportData;
    if (type === 'ARREST') {
        rapportData = rapportArrest;
    } else if (type === 'GAV') {
        rapportData = rapportGAV;
    }

    const rapport = rapportData.find((rapport) => rapport.id.toString() === id);
    const citoyen = listeCitoyenData.find((citoyen) => citoyen.citizenId === (rapport ? rapport.citizenId : null));


    return (
        <>
            {rapport && citoyen ? (
                <BoxFiche title={`Edition du ${rapport.title} de ${citoyen.title}`} classSpec={'app__content app__home'}>
                    <div className={'rapport-form'}>
                        {type === 'ARREST' ? (
                            <EditRapportArrest name={citoyen.title} qualif={rapport.qualification} content={rapport.descriptions} />
                        ) : type === 'GAV' ? (
                            <EditRapportGAV name={citoyen.title} hours={rapport.hours}
                                qualif={rapport.qualification}
                                content={rapport.descriptions}
                                urlImage={rapport.urlImage}
                                date={rapport.date}
                                officierID={rapport.officierId}
                            />
                        )
                        : null}
                    </div>
                </BoxFiche>
            ) : (
                <div className={'container-rapport'}>
                    <h5>Aucune donnée existante..</h5>
                    <Link to='/page/accueil'>
                        <button>Se rediriger</button>
                    </Link>
                </div>
            )}
        </>
    );
}

export default ShowEditRapport;
