import React, {Component} from "react";
import BoxFiche from "../../boxFiche/boxFiche";
import ListeCitoyen from "./ListeCitoyen/liste-citoyen";
import InfoCitoyen from "./InfoCitoyen/info-citoyen";
import ModalManager from "../mdt/Modals/ModalMap";

class PageFicheCitizen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCitizenId: null,
        };
    }
    handleCitizenSelect = (citizenId) => {
        this.setState({ selectedCitizenId: citizenId });
    };

    render() {
        return (
            <>
                <BoxFiche title="Fiche Citoyens">
                    <div className="citizenContainer">
                        <div className="citizen-left">
                            <ListeCitoyen onCitizenSelect={this.handleCitizenSelect} />
                        </div>
                        <div className="citizen-right">
                            {this.state.selectedCitizenId !== null ? (
                                <InfoCitoyen citizenId={this.state.selectedCitizenId} />
                            ) : (
                                <div className={"notOpened"}>
                                    <h4>Aucune fiche citoyen sélectionnée</h4>
                                </div>
                            )}
                        </div>
                    </div>
                </BoxFiche>

                <ModalManager />
            </>
        );
    }
}


export default PageFicheCitizen;