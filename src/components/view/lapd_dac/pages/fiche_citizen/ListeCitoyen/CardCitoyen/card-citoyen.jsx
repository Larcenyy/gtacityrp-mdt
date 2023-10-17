import React, {useState} from 'react';
import {Link} from "react-router-dom";
function CardCitoyen({ title, dateBirthday, isActive, onClick, citizenId, onDelete }) {
    const cardClassName = `card-citizen ${isActive ? 'cardActive' : ''}`;

    // État local pour gérer la visibilité du modèle de confirmation
    const [isConfirmationModalVisible, setConfirmationModalVisible] = useState(false);

    // Fonction pour afficher le modèle de confirmation
    function showConfirmationModal() {
        setConfirmationModalVisible(true);
    }

    // Fonction pour masquer le modèle de confirmation
    function hideConfirmationModal() {
        setConfirmationModalVisible(false);
    }

    const getUrl = window.location.href;
    const isLafd = getUrl.includes("lafd");

    return (
        <Link onClick={onClick} data-id={citizenId} className={cardClassName} to={isLafd ? `/lafd/page/fiches-citoyens?id=${citizenId}` : `/lapd/page/fiches-citoyens?id=${citizenId}` }>
            <div className={"card-citizen__info"}>
                <img style={{ width: "30px" }} src="/assets/images/icon/avatarCitizen.png" alt="Citoyen" />
                <div className={"card-citizen__name"}>
                    <h4>{title.toUpperCase()}</h4>
                    <p>{dateBirthday} </p>
                </div>
            </div>
            <hr/>
            <span onClick={showConfirmationModal}>
                <img style={{ width: "15px" }} src="/assets/images/icon/trashCall.png" alt="Supprimer" />
            </span>
            {/* Modèle de confirmation (affiché conditionnellement) */}
            {isConfirmationModalVisible && (
                <div className="confirmation-modal">
                    <p>Confirmer l'action ?</p>
                    <button onClick={() => { onDelete(); hideConfirmationModal(); }}><img style={{ width: "15px" }} src="/assets/images/icon/valid.svg" alt="Valider" /></button>
                    <button onClick={hideConfirmationModal}><img style={{ width: "15px" }} src="/assets/images/icon/invalide.svg" alt="Supprimer" /></button>
                </div>
            )}

        </Link>
    );
}

export default CardCitoyen;