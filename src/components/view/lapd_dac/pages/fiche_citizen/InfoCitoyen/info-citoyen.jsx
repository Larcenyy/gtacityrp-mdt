import React, {useEffect, useState} from 'react';
import Contravention from "./Contravention/contravention-container";
import {rapportGAV} from "./Rapport/RapportGAV/rapportGAV";
import {amendeData} from "./Contravention/Amende/amendeData";
import {fourriereData} from "./Contravention/Fourrière/fourriereData";
import {listeCitoyenData, supprimerCitoyenParId} from "../ListeCitoyen/listeCitoyenData";
import Rapport from "./Rapport/rapport-container";
import {rapportArrest} from "./Rapport/RapportArrest/rapportArrest";
import PermisCitoyen from "./Permis/permis-citoyen";

function InfoCitoyen({ citizenId }) {
    const [citoyenPermis, setCitoyenPermis] = useState({}); // État local pour les permis
    const [citizenName, setCitizenName] = useState(''); // État local pour stocker le nom du citoyen
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

    const getUrl = window.location.href;
    const isLafd = getUrl.includes("lafd");

    // Gestionnaire d'événements pour la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault(); // Empêcher le comportement par défaut du formulaire

        // Créez un objet contenant les nouvelles données, y compris les informations de permis
        const newData = {
            adresse: adresse,
            dateDeNaissance: birhday,
            taille: taille,
            masse: masse,
            profession: profession,
            lieuDeNaissance: lieunaissance,
            nationalite: nationalite,
            vehicule: vehicule,
            phone: phone,

            permisVehicle: citoyenPermis.vehicle,
            permisAir: citoyenPermis.air,
            permisBoat: citoyenPermis.boat,

            permisPistol: citoyenPermis.pistol,
            permisSmg: citoyenPermis.smg,
            permisShotgun: citoyenPermis.pompe,
            permisRifle: citoyenPermis.assaut,
            permisSnip: citoyenPermis.sniper,
        };

        // Appelez la fonction saveData pour sauvegarder les nouvelles données
        saveData(citizenId, newData); // Assurez-vous de l'implémenter dans votre code
    };


    // Fonction de gestion des permis pour mettre à jour l'état local
    const handlePermisChange = (permisData) => {
        setCitoyenPermis(permisData);
    };

    // Fonction pour sauvegarder les nouvelles données
    const saveData = (citizenId, newData) => {
        // Mettez en œuvre la logique pour sauvegarder les nouvelles données
        // Vous pouvez utiliser une requête API, mettre à jour un état global, ou tout autre mécanisme de stockage de données.
        // Assurez-vous de gérer correctement la sauvegarde des données selon votre application.
        console.log('Nouvelles données sauvegardées :', newData);
    };


    // Filtrer les contraventions de la fourrière par citizenId
    const filteredFourriereContraventions = fourriereData.filter((contravention) => contravention.citizenId === citizenId);

    // Filtrer les contraventions d'amende par citizenId
    const filteredAmendeContraventions = amendeData.filter((contravention) => contravention.citizenId === citizenId);

    // Filtrer les rapports d'arrestation par citizenId
    const filteredArrestReports = rapportArrest.filter((rapport) => rapport.citizenId === citizenId);

    // Filtrer les rapports de GAV par citizenId
    const filteredGAVReports = rapportGAV.filter((rapport) => rapport.citizenId === citizenId);


    useEffect(() => {
        // Recherchez les données du citoyen en fonction de l'ID
        console.log("citizenId:", citizenId);
        console.log("listeCitoyenData:", listeCitoyenData);

        // Recherchez les données du citoyen en fonction de l'ID
        const data = listeCitoyenData.find(citizen => citizen.citizenId === citizenId);
        setCitizenData(data);

        console.log("Data: " + data)

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
            setCitizenName(data.title); // Mettez à jour le nom du citoyen
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
                            <button onClick={handleSubmit} className={"submit goodAction"} type='submit'>
                                <img style={{ width: "18px" }} src="/assets/images/icon/edit.svg" alt="Supprimer" />
                                Editer la fiche
                            </button>
                        </div>
                        <div className={"citizenName"}>
                            <div className={"citizenAvatar"}>
                                <img style={{ width: "80px" }} src="/assets/images/icon/avatarCitizen.png" alt="Supprimer" />
                            </div>
                            <div>
                                <h4>{citizenData.title}</h4>
                                <small>{citizenData.age} ans - {citizenData.sexe}</small>
                            </div>
                        </div>
                        <div className={"buttonAction deleteAction"} onClick={() => supprimerCitoyen(citizenData.citizenId)}>
                            <img style={{ width: "18px" }} src="/assets/images/icon/trash.svg" alt="Supprimer" />
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
                                    placeholder={isLafd ? "Adresse du patient" : "Adresse du citoyen"}
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
                                        placeholder={isLafd ? "Taille du patient" : "Taille du citoyen"}
                                        value={taille}
                                        onChange={(e) => setTaille(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <h4>Masse : </h4>
                                    <input
                                        type="text"
                                        required={true}
                                        placeholder={isLafd ? "Masse du patient" : "Masse du citoyen"}
                                        value={masse}
                                        onChange={(e) => setMasse(e.target.value)}
                                    />
                                </div>
                            </div>
                            <PermisCitoyen
                                citizenId={citizenId}
                                onPermisChange={handlePermisChange} // Passez la fonction de gestion des permis
                            />
                        </div>
                        <div className={"citizen-fiche__coord__right"}>
                            <div>
                                <h4>Profession : </h4>
                                <input
                                    type="text"
                                    required={true}
                                    placeholder={isLafd ? "Profession du patient" : "Profession du citoyen"}
                                    value={profession}
                                    onChange={(e) => setProfession(e.target.value)}
                                />
                            </div>
                            <div>
                                <h4>Lieu de naissance : </h4>
                                <input
                                    type="text"
                                    required={true}
                                    placeholder={"Lieu de naissance"}
                                    value={lieunaissance}
                                    onChange={(e) => setLieuNaissance(e.target.value)}
                                />
                            </div>
                            <div>
                                <h4>Nationalité : </h4>
                                <input
                                    type="text"
                                    required={true}
                                    placeholder={"Nationalité"}
                                    value={nationalite}
                                    onChange={(e) => setNationalite(e.target.value)}
                                />
                            </div>
                            <div>
                                <h4>Véhicule : </h4>
                                <input
                                    type="text"
                                    required={true}
                                    placeholder={"Véhicule principal"}
                                    value={vehicule}
                                    onChange={(e) => setVehicule(e.target.value)}
                                />
                            </div>
                            <div>
                                <h4>N° de téléphone : </h4>
                                <input
                                    type="text"
                                    required={true}
                                    placeholder={isLafd ? "N° de telephone du patient" : "N° de telephone du citoyen"}
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className={"citizen-fiche__down"}>
                <Rapport type={'Arrest'} rapport={filteredArrestReports} citizenName={citizenName}/>
                <Rapport type={'GAV'} rapport={filteredGAVReports} citizenName={citizenName} />
            </div>
            {/* Afficher les contraventions de la fourrière filtrées */}
            <Contravention type={'fourriere'} contraventions={filteredFourriereContraventions} />
            {/* Afficher les contraventions d'amende filtrées */}
            <Contravention type={'amende'} contraventions={filteredAmendeContraventions} />
        </div>
    );
}

export default InfoCitoyen;