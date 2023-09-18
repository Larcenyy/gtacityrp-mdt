import React, {useState} from 'react';
import {openModal} from "../../../../../../../../dist/assets/modalToogle";
function RapportArrestCard({title, date, modalEdit, onDelete}) {
    function handleCitizenCardClick(event) {
        const modalId = event.currentTarget.getAttribute("data-modal");
        openModal(modalId);
    }

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

    return (
        <div className={`civil-card`}>
            <div className={"civil-card__info"}>
                <div className={"civil-card__info__left"}>
                    <div className={"civil-card__info__left__img"}>
                        <img style={{ width: "15px" }} src="/assets/images/icon/fiche.png" alt="Fiche" />
                    </div>
                    <div>
                        <h4>{title}</h4>
                        <p>{date}</p>
                    </div>
                </div>
                <div>
                    <hr/>
                </div>
                <ul>
                    <li>
                        <span><img style={{ width: "15px" }} src="/assets/images/icon/eyes.svg" alt="Voir" /></span>
                    </li>
                    <li>
                        <span onClick={handleCitizenCardClick} data-modal={modalEdit} className={'openModal'}><img style={{ width: "15px" }} src="/assets/images/icon/edit.svg" alt="Editer" /></span>
                    </li>
                    <span onClick={showConfirmationModal} className={"openModal"}>
                        <img style={{ width: "15px" }} src="/assets/images/icon/trashCall.png" alt="Supprimer" />
                    </span>
                </ul>
            </div>
            {/* Modèle de confirmation (affiché conditionnellement) */}
            {isConfirmationModalVisible && (
                <div className="confirmation-modal">
                    <p>Confirmer l'action ?</p>
                    <button onClick={() => { onDelete(); hideConfirmationModal(); }}><img style={{ width: "15px" }} src="/assets/images/icon/valid.svg" alt="Valider" /></button>
                    <button onClick={hideConfirmationModal}><img style={{ width: "15px" }} src="/assets/images/icon/invalide.svg" alt="Supprimer" /></button>
                </div>
            )}
        </div>
    );
}

export default RapportArrestCard;
