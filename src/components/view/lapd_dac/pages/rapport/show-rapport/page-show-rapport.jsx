import {Link, useLocation} from "react-router-dom";
import BoxFiche from "../../../boxFiche/boxFiche";
import {rapportArrest} from "../../fiche_citizen/InfoCitoyen/Rapport/RapportArrest/rapportArrest";
import {listeCitoyenData} from "../../fiche_citizen/ListeCitoyen/listeCitoyenData";
import React from "react";
import {officierData} from "../../mdt/Tables/officierData";
import {rapportGAV} from "../../fiche_citizen/InfoCitoyen/Rapport/RapportGAV/rapportGAV";


function ShowRapportArrest({type}) {
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

    // Trouvez l'officier correspondant par ID d'officier
    const officier = officierData.find((officier) => officier.officierID === (rapport ? rapport.officierId : null));

    return (
        <>
            {rapport && citoyen ? (
                <BoxFiche title={`Visualisation du ${rapport.title} de ${citoyen.title}`} classSpec={'app__content app__home'}>
                    <div className={'viewpage-container'}>
                        <div className={'viewpage-container__top'}>
                            <h4>Informations concernant le citoyen</h4>
                            <div>
                                <p>Nom du citoyen : <strong>{citoyen.title} - {citoyen.sexe} </strong></p>
                                <small>Née le : <strong>{citoyen.dateBirthday}</strong> | Adresse : <strong>{citoyen.adresse}</strong> </small>
                                <Link to={`/page/fiches-citoyens?id=${citoyen.citizenId}`}>
                                    <button>Voir la fiche de {citoyen.title}</button>
                                </Link>
                            </div>
                        </div>
                        <div className={'viewpage-container__down'}>
                            <h4>{type === "ARREST" ? "Informations concernant le rapport d'arrestation" : "Informations concernant le rapport de garde à vue"}</h4>

                            <div>
                                <p>Citoyen lié aux {rapport.title} : <strong>{citoyen.title}</strong></p>
                            </div>
                            <div>
                                <p>Qualification de l'infraction : <strong>{rapport.qualification}</strong></p>
                            </div>
                            <div>
                                <p>Rapport : <strong>{rapport.descriptions}</strong></p>
                            </div>
                            {type === 'GAV' && officier ? (
                                <>
                                    <div>
                                        <p>Officier en charge : <strong>{officier.name} | {officier.matricule}</strong></p>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between"}}>
                                        <p>Photo du suspect : </p>
                                        <img style={{width: "150px", height: "150px", borderRadius: "7px" }} src={rapport.urlImage} alt={`Photo de ${citoyen.title}`} />
                                    </div>
                                </>
                            ) : null}
                            <Link to='/page/accueil'>
                                <button>Revenir à l'accueil</button>
                            </Link>
                        </div>
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

export default ShowRapportArrest;
