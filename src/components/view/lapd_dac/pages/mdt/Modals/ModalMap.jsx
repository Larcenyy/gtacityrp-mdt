import React, {useState} from 'react';
import { modalData } from './modalData';
import Modal from "../../../modal/Modal";

function ModalManager({ method }) {


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
                        enableVehicleCard={modal.enableVehicleCard}
                        enableMap={modal.enableMap}
                        titlePlaceHolder={modal.titlePlaceHolder}
                        textBouton={modal.textBouton}
                        classButton={modal.classButton}
                        method={method}
                    >
                    </Modal>
                </div>
            ))}
        </>
    );
}

export default ModalManager;
