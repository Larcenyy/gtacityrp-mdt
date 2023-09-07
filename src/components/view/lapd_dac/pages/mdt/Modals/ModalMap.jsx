import React from 'react';
import { modalData } from './modalData';
import Modal from "../../../modal/Modal";

function ModalManager() {
    return (
        <>
            {modalData.map((modal, index) => (
                <div className="modal-background" id={modal.id} key={index}>
                    <Modal
                        title={modal.title}
                        descrip={modal.descrip}
                        enableButtons={modal.enableButtons}
                        enableSearchBar={modal.enableSearchBar}
                        enableAgentCard={modal.enableAgentCard}
                        enableMap={modal.enableMap}
                        titlePlaceHolder={modal.titlePlaceHolder}
                        textBouton={modal.textBouton}
                        classButton={modal.classButton}
                    >
                    </Modal>
                </div>
            ))}
        </>
    );
}

export default ModalManager;
