import React, { useState } from "react";

function LapdAgendaList({ agendaData, setAgendaData }) {
    const [confirmationModalVisible, setConfirmationModalVisible] = useState(null);

    function showConfirmationModal(index) {
        setConfirmationModalVisible(index);
    }

    function hideConfirmationModal() {
        setConfirmationModalVisible(null);
    }

    function deleteAgendaItem(index) {
        // Créez une copie du tableau agendaData avec l'élément supprimé
        const updatedAgendaData = [...agendaData];
        updatedAgendaData.splice(index, 1);

        // Mettez à jour l'état du tableau agendaData
        setAgendaData(updatedAgendaData);

        // Cachez la fenêtre modale de confirmation
        hideConfirmationModal();
    }

    return (
        <div className="agenda content-item">
            <div className="title-content">
                <div className="icon icon__agenda-title"></div>
                Ordre du jour
            </div>
            <div className="content__agenda__list">
                {agendaData.map((agenda, index) => (
                    <div className="agenda__content" key={agenda.id}>
                        <div className="top">
                            <div className="title">Ordre du jour #{agenda.id} ({agenda.date} - {agenda.hours})</div>
                            <div className="options">
                                <div className="edit openModal" data-modal="edit__agenda__id"></div>
                                <div onClick={() => showConfirmationModal(index)} className="delete openModal" data-modal="delete__agenda__id"></div>
                            </div>
                        </div>
                        <div className="text">
                            {agenda.content}
                        </div>
                        {confirmationModalVisible === index && (
                            <div className="confirmation-modal">
                                <p>Confirmer l'action ?</p>
                                <button onClick={() => deleteAgendaItem(index)}><img style={{ width: "15px" }} src="/assets/images/icon/valid.svg" alt="Supprimer" /></button>
                                <button onClick={hideConfirmationModal}><img style={{ width: "15px" }} src="/assets/images/icon/invalide.svg" alt="Annuler" /></button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LapdAgendaList;
