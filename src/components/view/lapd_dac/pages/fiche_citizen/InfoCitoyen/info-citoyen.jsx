import React, {useEffect, useState} from 'react';
import RapportArrest from "./RapportArrestation/rapport-arrest";
import RapportGAV from "./RapportGAV/rapport-gav";
import Contravention from "./Contravention/contravention-container";
import {rapportArrest} from "./RapportArrestation/rapportArrest";
import {rapportGAV} from "./RapportGAV/rapportGAV";
import {amendeData} from "./Contravention/Amende/amendeData";
import {fourriereData} from "./Contravention/Fourrière/fourriereData";
import {listeCitoyenData, supprimerCitoyenParId} from "../ListeCitoyen/listeCitoyenData";

function InfoCitoyen({ citizenId }) {

    const [citizenData, setCitizenData] = useState(null);
    const [taille, setTaille] = useState('');
    const [masse, setMasse] = useState('');
    const [birhday, setBirhday] = useState('');
    const [adresse, setAdresse] = useState('');
    const [profession, setProfession] = useState('');
    const [lieunaissance, setLieuNaissance] = useState('');
    const [nationalite, setNationalite] = useState('');
    const [vehicule, setVehicule] = useState('');
    const [phone, setPhone] = useState('');
    const [permisActifs, setPermisActifs] = useState({
        vehicle: false,
        air: false,
        boat: false,
        pistol: false,
        smg: false,
        pompe: false,
        assaut: false,
        sniper: false,
    });

    // Filtrer les contraventions de la fourrière par citizenId
    const filteredFourriereContraventions = fourriereData.filter((contravention) => contravention.citizenId === citizenId);

    // Filtrer les contraventions d'amende par citizenId
    const filteredAmendeContraventions = amendeData.filter((contravention) => contravention.citizenId === citizenId);

    // Filtrer les rapports d'arrestation par citizenId
    const filteredArrestReports = rapportArrest.filter((report) => report.citizenId === citizenId);

    // Filtrer les rapports de GAV par citizenId
    const filteredGAVReports = rapportGAV.filter((report) => report.citizenId === citizenId);


    const togglePermis = (data) => {
        setPermisActifs((prevPermisActifs) => ({
            ...prevPermisActifs,
            [data]: !prevPermisActifs[data],
        }));
    };

    useEffect(() => {

        // Recherchez les données du citoyen en fonction de l'ID
        const data = listeCitoyenData.find(citizen => citizen.citizenId === citizenId);

        // Mettez à jour les données du citoyen dans l'état
        setCitizenData(data);

        // Si les données du citoyen sont disponibles, initialisez les valeurs du formaulaiures
        if (data) {
            setTaille(data.taille);
            setMasse(data.masse);
            setBirhday(data.dateBirthday);
            setAdresse(data.adresse);
            setProfession(data.profession);
            setLieuNaissance(data.naissance);
            setNationalite(data.nationalite);
            setVehicule(data.vehicule);
            setPhone(data.phone);
        }

    }, [citizenId]);


    if (citizenData === null) {
        return <div>Loading...</div>;
    }

    if (!citizenData) {
        return <div>Aucune fiche citoyen sélectionnée</div>;
    }

    function supprimerCitoyen(citizenId) {
        // Supprimez le citoyen dans la source de données (fichier JS)
        supprimerCitoyenParId(citizenId);

        const nouvelleListeCitoyens = listeCitoyenData.filter(
            (citizen) => citizen.citizenId !== citizenId
        );

        setCitizenData(null); // Réinitialisez d'abord l'état pour éviter les erreurs visuelles
        setCitizenData(nouvelleListeCitoyens[0]); // Mettez à jour l'état avec le premier citoyen restant

        // Créez un événement personnalisé 'onDelete' et déclenchez-le
        const deleteEvent = new Event('onDelete');
        document.dispatchEvent(deleteEvent);
    }

    return (
        <div className={"citizen-fiche"}>
            <div className={"citizen-fiche__top"}>
                <form> {/* Ajoutez onSubmit pour gérer la soumission du formulaire */}
                    <div className={"citizen-fiche__info"}>
                        <div>
                            <button className={"submit goodAction"} type='submit'>
                                <img style={{ width: "18px" }} src="/assets/icon/edit.svg" alt="Supprimer" />
                                Editer la fiche
                            </button>
                        </div>
                        <div className={"citizenName"}>
                            <div className={"citizenAvatar"}>
                                <img style={{ width: "80px" }} src="/assets/icon/avatarCitizen.png" alt="Supprimer" />
                            </div>
                            <div>
                                <h4>{citizenData.title}</h4>
                                <small>id : {citizenData.citizenId}</small>
                                <small>{citizenData.age} ans - {citizenData.sexe}</small>
                            </div>
                        </div>
                        <div className={"buttonAction deleteAction"} onClick={() => supprimerCitoyen(citizenData.citizenId)}>
                            <img style={{ width: "18px" }} src="/assets/icon/trash.svg" alt="Supprimer" />
                            <span data-modal={"deleteFicheCitizen"} className={'openModal'}>
                                Supprimer la fiche
                            </span>
                        </div>
                    </div>
                    <div className={"citizen-fiche__coord"}>
                        <div className={"citizen-fiche__coord__left"}>
                            <div>
                                <h4>Adresse: </h4>
                                <input
                                    type="text"
                                    required={true}
                                    placeholder={"Adresse de résidence du citoyen"}
                                    value={adresse}
                                    onChange={(e) => setAdresse(e.target.value)}
                                />
                            </div>
                            <div>
                                <h4>Date de naissance : </h4>
                                <input
                                    type="text"
                                    required={true}
                                    placeholder={"Date de naissance"}
                                    value={birhday}
                                    onChange={(e) => setBirhday(e.target.value)}
                                />
                            </div>
                            <div>
                                <div>
                                    <h4>Taille : </h4>
                                    <input
                                        type="text"
                                        required={true}
                                        placeholder={"Taille du citoyen"}
                                        value={taille}
                                        onChange={(e) => setTaille(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <h4>Masse : </h4>
                                    <input
                                        type="text"
                                        required={true}
                                        placeholder={"Masse du citoyen"}
                                        value={masse}
                                        onChange={(e) => setMasse(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <h4>Permis de conduire : </h4>
                                <ul>
                                    <li className={permisActifs.vehicle ? 'allowed' : ''} onClick={() => togglePermis('vehicle')}>
                                        <img style={{ width: "20px" }} src="/assets/icon/citizen/car.png" alt="permis voiture" />
                                    </li>
                                    <li className={permisActifs.air ? 'allowed' : ''} onClick={() => togglePermis('air')}>
                                        <img style={{ width: "20px" }} src="/assets/icon/citizen/plane.png" alt="permis avion" />
                                    </li>
                                    <li className={permisActifs.boat ? 'allowed' : ''} onClick={() => togglePermis('boat')}>
                                        <img style={{ width: "20px" }} src="/assets/icon/citizen/bateau.png" alt="permis bateau" />
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4>Permis d'arme : </h4>
                                <ul>
                                    <li className={permisActifs.pistol ? 'allowed' : ''} onClick={() => togglePermis('pistol')}>
                                        <img style={{ width: '20px' }} src="/assets/icon/citizen/pistol.png" alt="Permis pistolet" />
                                    </li>
                                    <li className={permisActifs.smg ? 'allowed' : ''} onClick={() => togglePermis('smg')}>
                                        <img style={{ width: '20px' }} src="/assets/icon/citizen/smg.png" alt="Permis SMG" />
                                    </li>
                                    <li className={permisActifs.pompe ? 'allowed' : ''} onClick={() => togglePermis('pompe')}>
                                        <img style={{ width: '20px' }} src="/assets/icon/citizen/pompe.png" alt="Permis pompe" />
                                    </li>
                                    <li className={permisActifs.assaut ? 'allowed' : ''} onClick={() => togglePermis('assaut')}>
                                        <img style={{ width: '20px' }} src="/assets/icon/citizen/rifle.png" alt="Permis Assaut" />
                                    </li>
                                    <li className={permisActifs.sniper ? 'allowed' : ''} onClick={() => togglePermis('sniper')}>
                                        <img style={{ width: '20px' }} src="/assets/icon/citizen/snip.png" alt="Permis Sniper" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={"citizen-fiche__coord__right"}>
                            <div>
                                <h4>Profession : </h4>
                                <input
                                    type="text"
                                    required={true}
                                    placeholder={"Profession du citoyen"}
                                    value={profession}
                                    onChange={(e) => setProfession(e.target.value)}
                                />
                            </div>
                            <div>
                                <h4>Lieu de naissance : </h4>
                                <input
                                    type="text"
                                    required={true}
                                    placeholder={"Lieu de naissance du citoyen"}
                                    value={lieunaissance}
                                    onChange={(e) => setLieuNaissance(e.target.value)}
                                />
                            </div>
                            <div>
                                <h4>Nationalité : </h4>
                                <input
                                    type="text"
                                    required={true}
                                    placeholder={"Nationalité du citoyen"}
                                    value={nationalite}
                                    onChange={(e) => setNationalite(e.target.value)}
                                />
                            </div>
                            <div>
                                <h4>Véhicule : </h4>
                                <input
                                    type="text"
                                    required={true}
                                    placeholder={"Véhicule principal du citoyen"}
                                    value={vehicule}
                                    onChange={(e) => setVehicule(e.target.value)}
                                />
                            </div>
                            <div>
                                <h4>N° de téléphone : </h4>
                                <input
                                    type="text"
                                    required={true}
                                    placeholder={"N° de téléphone du citoyen"}
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className={"citizen-fiche__down"}>
                <RapportArrest reports={filteredArrestReports} />
                <RapportGAV reports={filteredGAVReports} />
            </div>
            {/* Afficher les contraventions de la fourrière filtrées */}
            <Contravention type={'fourriere'} contraventions={filteredFourriereContraventions} />
            {/* Afficher les contraventions d'amende filtrées */}
            <Contravention type={'amende'} contraventions={filteredAmendeContraventions} />
        </div>
    );
}

export default InfoCitoyen;