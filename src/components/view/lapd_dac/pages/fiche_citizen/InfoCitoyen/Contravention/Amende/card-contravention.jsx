import React, {useState} from 'react';

function CardContravention({ title, date, isGood, onDelete}) {
    const textClass = isGood ? 'textGood' : 'textBad';
    const iconSrc = isGood ? '/assets/images/icon/valid.svg' : '/assets/images/icon/invalide.svg';
    const paymentStatus = isGood ? 'Payé' : 'Impayé';

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
        <div className={"card-contrat"}>
            <div className={"card-contrat__info"}>
                <div className={"card-contrat__info__img"}>
                    <img style={{ width: "20px" }} src="/assets/images/icon/radarScan.svg" alt="Photo" />
                </div>
                <div>
                    <h4>{title}</h4>
                    <p>{date} -
                        <span className={textClass}>
                             <img style={{ width: "10px" }} src={iconSrc} alt="Statut" />
                            {paymentStatus}
                        </span>
                    </p>
                </div>
                <div>
                    <hr/>
                </div>
                <div>
                     <span onClick={showConfirmationModal} className={"openModal"}>
                        <img style={{ width: "15px" }} src="/assets/images/icon/trashCall.png" alt="Supprimer" />
                      </span>
                </div>
            </div>
            {/* Modèle de confirmation (affiché conditionnellement) */}
            {isConfirmationModalVisible && (
                <div className="confirmation-modal">
                    <p>Confirmer l'action ?</p>
                    <button onClick={() => { onDelete(); hideConfirmationModal(); }}><img style={{ width: "15px" }} src="/assets/images/icon/valid.svg" alt="Supprimer" /></button>
                    <button onClick={hideConfirmationModal}><img style={{ width: "15px" }} src="/assets/images/icon/invalide.svg" alt="Supprimer" /></button>
                </div>
            )}
        </div>
    );
}

export default CardContravention;