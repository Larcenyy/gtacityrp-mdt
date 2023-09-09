import React, {Component} from "react";
import BoxFiche from "../../boxFiche/boxFiche";
import ListeCitoyen from "./ListeCitoyen/liste-citoyen";
import InfoCitoyen from "./InfoCitoyen/info-citoyen";
import ModalManager from "../mdt/Modals/ModalMap";
import {listeCitoyenData} from "./ListeCitoyen/listeCitoyenData";


class PageFicheCitizen extends Component {
    render() {
        return (
            <>
                <BoxFiche title="Fiche Citoyens">
                    <div className="citizenContainer">
                        <div className="citizen-left">
                            {listeCitoyenData.map((liste, index) => (
                                <ListeCitoyen
                                    key={index}
                                    modalDelete={liste.modalDelete}
                                    name={liste.firstName}
                                />
                            ))}
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