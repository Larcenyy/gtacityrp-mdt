import React, {Component} from "react";
import LapdAlert from "./lapd-alert";
import LapdAgenda from "./lapd-agenda";
import LapdAgentList from "./lapd-agentlist";

import modalToogle, {attachModalListeners} from "../../../../../dist/assets/modalToogle"; // Chemin vers votre fichier utils.js

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

                {/* Modal 1 */}
                <div className="modal-background" id="edit__agenda__id" style={{ display: "none" }}>
                    <div className="modal-content">
                        <div className="title">
                            <h1>Modifier l'ordre du jour #id</h1>
                            <div className="closeModal closeModalBtn"></div>
                        </div>
                        <form action="">
                            <textarea name="editAgenda" id="agenda__id" cols="10" rows="5"></textarea>
                            <div className="buttons">
                                <button className="button modify">Modifier</button>
                                <button className="button cancel closeModalBtn">Annuler</button>
                            </div>
                        </form>
                    </div>
                </div>


                {/* Modal 2 */}
                <div className="modal-background" id="delete__agenda__id" style={{ display: "none" }}>
                    <div className="modal-content">
                        <div className="title">
                            <h1>Supprimer l'ordre du jour #id</h1>
                        </div>
                        Êtes-vous sûr de vouloir supprimer cet ordre du jour ?
                        <div className="buttons">
                            <button className="button delete">Supprimer</button>
                            <button className="button cancel closeModalBtn">Annuler</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default PageHome;