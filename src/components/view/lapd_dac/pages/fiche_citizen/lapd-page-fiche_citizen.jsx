import React, {Component} from "react";
import BoxFiche from "../../boxFiche/boxFiche";
import ListeCitoyen from "./ListeCitoyen/liste-citoyen";
import InfoCitoyen from "./InfoCitoyen/info-citoyen";
import ModalManager from "../mdt/Modals/ModalMap";



class PageFicheCitizen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCardIndex: null, // Index de la carte active
        };
    }

    render() {
        return (
            <>
                <BoxFiche title="Fiche Citoyens">
                    <div className="citizenContainer">
                        <div className="citizen-left">
                            <ListeCitoyen/>
                        </div>
                        <div className="citizen-right">
                            {/*<div className={"notOpened"}>*/}
                            {/*    <h4>Aucune fiche citoyen sélectionnée</h4>*/}
                            {/*</div>*/}
                            <InfoCitoyen/>
                        </div>
                    </div>
                </BoxFiche>

                <ModalManager/>
            </>
        );
    }
}


export default PageFicheCitizen;