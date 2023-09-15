import React, {useState} from 'react';
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

    return (
        <div className={cardClassName} onClick={onClick} data-id={citizenId}>
            <div className={"card-citizen__info"}>
                <img style={{ width: "30px" }} src="/assets/icon/avatarCitizen.png" alt="Citoyen" />
                <div className={"card-citizen__name"}>
                    <h4>{title}</h4>
                    <p>{dateBirthday} </p>
                </div>
            </div>
            <hr/>
            <span onClick={showConfirmationModal}>
                <img style={{ width: "15px" }} src="/assets/icon/trashCall.png" alt="Supprimer" />
            </span>
            {/* Modèle de confirmation (affiché conditionnellement) */}
            {isConfirmationModalVisible && (
                <div className="confirmation-modal">
                    <p>Confirmer l'action ?</p>
                    <button onClick={() => { onDelete(); hideConfirmationModal(); }}><img style={{ width: "15px" }} src="/assets/icon/valid.svg" alt="Valider" /></button>
                    <button onClick={hideConfirmationModal}><img style={{ width: "15px" }} src="/assets/icon/invalide.svg" alt="Supprimer" /></button>
                </div>
            )}
        </div>
    );
}

export default CardCitoyen;