import React, {Component, useState} from "react";
import BoxFiche from "../../boxFiche/boxFiche";
import {ppaData} from "./ppaData";
import {listeCitoyenData} from "../fiche_citizen/ListeCitoyen/listeCitoyenData";
import {Link} from "react-router-dom";
const PagePPA = () => {
    const [itemToDeleteIndex, setItemToDeleteIndex] = useState(null);
    const [isConfirmationModalVisible, setIsConfirmationModalVisible] = useState(
        false
    );
    const [ppaList, setPPAlist] = useState(ppaData);

    // Fonction pour afficher le modèle de confirmation
    const showConfirmationModal = (index) => {
        setItemToDeleteIndex(index);
        setIsConfirmationModalVisible(true);
    };

    // Fonction pour masquer le modèle de confirmation
    const hideConfirmationModal = () => {
        setItemToDeleteIndex(null);
        setIsConfirmationModalVisible(false);
    };

    // Fonction de suppression
    const handleDelete = () => {
        if (itemToDeleteIndex !== null) {
            // Créez une copie du tableau ppaList
            const updatedPpaList = [...ppaList];
            // Supprimez l'élément à l'index donné
            updatedPpaList.splice(itemToDeleteIndex, 1);
            // Mettez à jour le tableau ppaList avec la nouvelle liste sans l'élément supprimé
            setPPAlist(updatedPpaList);
            // Masquez le modèle de confirmation
            hideConfirmationModal();
        }
    };

    return (
        <>
            <BoxFiche title="Demandes de port d'arme" classSpec={"app__content app__home"} icon={"pistol.svg"}>
                <div className={"container-ppa"}>
                    {ppaList.length === 0 ? (
                        <h4>Aucune demande actuellement..</h4>
                    ) : (
                        ppaList.map((ppaCard, index) => {
                            // Recherche le citoyen correspondant dans listeCitoyenData
                            const citoyen = listeCitoyenData.find(
                                (citizen) => citizen.title === ppaCard.name
                            );
                            const citizenLink = citoyen
                                ? `/page/lapd/fiches-citoyens?id=${citoyen.citizenId}`
                                : "";
                            return (
                                <div className={"card-ppa"}>
                                        <div className={"card-ppa__left"}>
                                            <img style={{ width: "40px  " }} src="/assets/images/icon/avatarCitizen.png" alt="Avatar" />
                                            <div>
                                                <h4>{ppaCard.name.toUpperCase()}</h4>
                                                <p>{ppaCard.date}</p>
                                            </div>
                                            <div className={"container-permis"}>
                                                <div className={"container-permis__pending"}>
                                                    <h4>Permis souhaité :</h4>
                                                    <ul>
                                                        <li className={ppaCard.permisPending.permisPistol ? "allowed" : ""}>
                                                            <img style={{ width: '15px' }} src="/assets/images/icon/citizen/pistol.svg" alt="Permis pistolet" />
                                                        </li>
                                                        <li className={ppaCard.permisPending.permisSMG ? "allowed" : ""}>
                                                            <img style={{ width: '15px' }} src="/assets/images/icon/citizen/smg.svg" alt="Permis SMG" />
                                                        </li>
                                                        <li className={ppaCard.permisPending.permisShotgun ? "allowed" : ""}>
                                                            <img style={{ width: '15px' }} src="/assets/images/icon/citizen/shotgun.svg" alt="Permis pompe" />
                                                        </li>
                                                        <li className={ppaCard.permisPending.permisRifle ? "allowed" : ""}>
                                                            <img style={{ width: '15px' }} src="/assets/images/icon/citizen/rifle.svg" alt="Permis Assaut" />
                                                        </li>
                                                        <li className={ppaCard.permisPending.permisSnip ? "allowed" : ""}>
                                                            <img style={{ width: '15px' }} src="/assets/images/icon/citizen/snip.svg" alt="Permis Sniper" />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className={"container-permis__pending"}>
                                                    <h4>Permis déjà possédé :</h4>
                                                    <ul>
                                                        <li className={ppaCard.permisAllowed.permisPistol ? "allowed" : ""}>
                                                            <img style={{ width: '15px' }} src="/assets/images/icon/citizen/pistol.svg" alt="Permis pistolet" />
                                                        </li>
                                                        <li className={ppaCard.permisAllowed.permisSMG ? "allowed" : ""}>
                                                            <img style={{ width: '15px' }} src="/assets/images/icon/citizen/smg.svg" alt="Permis SMG" />
                                                        </li>
                                                        <li className={ppaCard.permisAllowed.permisShotgun ? "allowed" : ""}>
                                                            <img style={{ width: '15px' }} src="/assets/images/icon/citizen/shotgun.svg" alt="Permis pompe" />
                                                        </li>
                                                        <li className={ppaCard.permisAllowed.permisRifle ? "allowed" : ""}>
                                                            <img style={{ width: '15px' }} src="/assets/images/icon/citizen/rifle.svg" alt="Permis Assaut" />
                                                        </li>
                                                        <li className={ppaCard.permisAllowed.permisSnip ? "allowed" : ""}>
                                                            <img style={{ width: '15px' }} src="/assets/images/icon/citizen/snip.svg" alt="Permis Sniper" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"card-ppa__right"}>
                                            <div className={"card-ppa__right__date"}>
                                                <p>Date de la demande : <span>{ppaCard.createdAt}</span> </p>
                                                <p>Adresse de résidence : <span>{ppaCard.adresse}</span> </p>
                                            </div>
                                            <hr/>
                                            <div className={"card-ppa__right__button"}>
                                                <img style={{ width: "25px" }} src="/assets/images/icon/ppa/valid.svg" alt="Valider" />
                                                <span onClick={() => showConfirmationModal(index)}>
                                                    <img style={{ width: "25px" }} src="/assets/images/icon/ppa/invalide.svg" alt="Supprimer" />
                                                </span>
                                                {citoyen &&
                                                    <Link to={citizenLink}>
                                                        <img style={{ width: "25px" }} src="/assets/images/icon/ppa/person.svg" alt="Avatar" />
                                                    </Link>
                                                }
                                            </div>
                                        </div>
                                        {itemToDeleteIndex === index && isConfirmationModalVisible && (
                                            <div className="confirmation-modal">
                                                <p>Confirmer l'action ?</p>
                                                <button onClick={handleDelete}>
                                                    <img
                                                        style={{ width: "15px" }}
                                                        src="/assets/images/icon/valid.svg"
                                                        alt="Valider"
                                                    />
                                                </button>
                                                <button onClick={hideConfirmationModal}>
                                                    <img
                                                        style={{ width: "15px" }}
                                                        src="/assets/images/icon/invalide.svg"
                                                        alt="Supprimer"
                                                    />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                );
                        })
                    )}
                </div>
            </BoxFiche>
        </>
    );
}

export default PagePPA;