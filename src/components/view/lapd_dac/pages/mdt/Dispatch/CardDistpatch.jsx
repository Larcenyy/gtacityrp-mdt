import React, {useState} from 'react';

function CardDispatch({ badgeId, badgeCode, title, time, location, modalVerif, modalLocalisation, onDelete }) {

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
        <div className={'cardDispatch'}>
            <div className={'cardDispatch__left'}>
                <div className={'cardDispatch__left__top'}>
                    <div className={"cardDispatch__left__top__code"}>
                        <span className={"badgeId"}>#{badgeId}</span>
                        <span className={"badgeCode"}>{badgeCode}</span>
                        <h5>{title}</h5>
                    </div>
                    <div className={"cardDispatch__left__top__info"}>
                        <p><img style={{width: "12px"}} src="/assets/images/icon/clock.svg" alt="Heures"/>{time}</p>
                        <p><img style={{width: "12px"}} src="/assets/images/icon/localisation.svg" alt="Localisation"/>{location}</p>
                    </div>
                    <span data-modal={modalVerif} className="claim openModal">Prendre l'appel</span>
                </div>
            </div>
            <div className={'cardDispatch__right'}>
                <div className={"cardDispatch__right__icon"}>
                        <span onClick={showConfirmationModal}>
                        <img style={{ width: "17px", fill: "#ED1B22", cursor: "pointer" }} src="/assets/images/icon/trashCall.png" alt="Supprimer" />
                      </span>
                    <span data-modal={modalLocalisation} className={"openModal"}>
                        <img style={{width: "12px", cursor: "pointer"}} src="/assets/images/icon/localisation.svg" alt="Localisation"/>
                    </span>
                </div>
            </div>
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

export default CardDispatch;
