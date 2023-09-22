import React, {Component} from "react";
import LapdAlert from "./lapd-alert";
import LapdAgenda from "./lapd-agenda";
import LapdAgentList from "./lapd-agentlist";

import modalToogle, {attachModalListeners} from "../../../../../dist/assets/modalToogle";
import Modal from "../../../modal/Modal"; // Chemin vers votre fichier utils.js

class PageHome extends Component {

    componentDidMount() {
        attachModalListeners();
    }

    render() {
        return (
            <>
                <div className="app__content app__home">
                    <LapdAlert/>
                    <LapdAgenda/>
                    <LapdAgentList/>
                </div>


                {/* Modal pour modifier un ordre */}
                <div className="modal-background" id="edit__agenda__id">
                    <Modal
                        title={"Modifier l'ordre du jour #id"}
                        descrip={""}
                        enableButtons={true}
                        enableSearchBar={false}
                        enableAgentCard={false}
                        enableTextArea={true}
                        enableMap={false}
                        textBouton={"Modifier"}
                        classButton={""}
                    >
                    </Modal>
                </div>

                {/* Modal pour supprime un ordre */}

                <div className="modal-background" id="delete__agenda__id">
                    <Modal
                        title={"Supprimer l'ordre du jour #id"}
                        descrip={"Êtes-vous sûr de vouloir supprimer cet ordre du jour ?"}
                        enableButtons={true}
                        enableSearchBar={false}
                        enableAgentCard={false}
                        enableTextArea={false}
                        enableMap={false}
                        textBouton={"Supprime l'ordre"}
                        classButton={"delete button"}
                    >
                    </Modal>
                </div>
            </>
        );
    }
}


export default PageHome;