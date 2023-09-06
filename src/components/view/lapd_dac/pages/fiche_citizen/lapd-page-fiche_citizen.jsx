import React, {Component} from "react";
import BoxFiche from "../../boxFiche/boxFiche";

class PageFicheCitizen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCardIndex: null, // Index de la carte active
        };
    }

    handleCardClick = (index) => {
        // Fonction pour gérer le clic sur une carte-citoyen
        if (this.state.activeCardIndex === index) {
            // Désactivez la carte si elle est déjà active
            this.setState({ activeCardIndex: null });
        } else {
            // Activez la nouvelle carte
            this.setState({ activeCardIndex: index });
        }
    };

    handleListClick = (listId) => {
        if (this.state.activeListId === listId) {
            this.setState({ activeListId: null });
        } else {
            this.setState({ activeListId: listId });
        }
    };

    render() {


        return (
            <>
                <BoxFiche title="Fiche Citoyens">
                    <div className="test">
                        <div className="test-left">
                            <div className={"citizen-list"}>
                                <div className={"search-container"}>
                                    <input className="search-bar" type="text" placeholder={"Rechercher un citoyen "}/>
                                    <div className={"search-icon"}></div>
                                </div>
                                <div className={'card-container'}>
                                        {Array.from({ length: 8 }, (_, index) => (
                                            <div
                                                className={`card-citizen ${
                                                    this.state.activeCardIndex === index ? "cardActive" : ""
                                                }`}
                                                key={index}
                                                onClick={() => this.handleCardClick(index)}
                                            >
                                                <div className={"card-citizen__info"}>
                                                    <img style={{ width: "30px" }} src="/assets/icon/avatarCitizen.png" alt="Citoyen" />
                                                    <div className={"card-citizen__name"}>
                                                        <h4>NOM Prénom</h4>
                                                        <p>Date de naissance</p>
                                                    </div>
                                                </div>
                                                <hr/>
                                                <img style={{ width: "18px" }} src="/assets/icon/trashCall.png" alt="Supprimer" />
                                            </div>
                                        ))}
                                </div>
                                <div className={"newFiche"}>
                                    <span>+ Créer une fiche citoyen</span>
                                </div>
                            </div>
                        </div>
                        <div className="test-right">
                            {/*<div className={"notOpened"}>*/}
                            {/*    <h4>Aucune fiche citoyen sélectionnée</h4>*/}
                            {/*</div>*/}
                            <div className={"citizen-fiche"}>
                                <div className={"citizen-fiche__top"}>
                                    <div className={"citizen-fiche__info"}>
                                        <div className={"buttonAction goodAction"}>
                                            <img style={{ width: "18px" }} src="/assets/icon/edit.svg" alt="Supprimer" />
                                            <span>Editer la fiche</span>
                                        </div>
                                        <div className={"citizenName"}>
                                            <div className={"citizenAvatar"}>
                                                <img style={{ width: "80px" }} src="/assets/icon/avatarCitizen.png" alt="Supprimer" />
                                            </div>
                                            <div>
                                                <h4>NOM Prénom</h4>
                                                <small>xx ans - sexe</small>
                                            </div>
                                        </div>
                                        <div className={"buttonAction deleteAction"}>
                                            <img style={{ width: "18px" }} src="/assets/icon/trash.svg" alt="Supprimer" />
                                            <span>Supprimer la fiche</span>
                                        </div>
                                    </div>
                                    <div className={"citizen-fiche__coord"}>
                                        <div className={"citizen-fiche__coord__left"}>
                                            <div>
                                                <h4>Adresse: </h4>
                                                <input type="text" placeholder={"Adresse de résidence du citoyen"}/>
                                            </div>
                                            <div>
                                                <h4>Date de naissance : </h4>
                                                <input type="text" placeholder={"Profession du citoyen"}/>
                                            </div>
                                            <div>
                                                <h4>Permis de conduire : </h4>
                                                <ul>
                                                    <li
                                                        className={`${
                                                            this.state.activePermisArmeIndex === 0
                                                                ? "active"
                                                                : ""
                                                        }`}
                                                        onClick={() => this.handlePermisArmeClick(0)}
                                                    >
                                                        <img style={{ width: "20px" }} src="/assets/icon/citizen/car.png" alt="permis voiture" />
                                                    </li>
                                                    <li>
                                                        <img style={{ width: "20px" }} src="/assets/icon/citizen/plane.png" alt="permis voiture" />
                                                    </li>
                                                    <li>
                                                        <img style={{ width: "20px" }} src="/assets/icon/citizen/bateau.png" alt="permis voiture" />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4>Permis d'arme : </h4>
                                                <ul>
                                                    <li className={"allowed"}>
                                                        <img style={{ width: "20px" }} src="/assets/icon/citizen/pistol.png" alt="Permis pistolet" />
                                                    </li>
                                                    <li>
                                                        <img style={{ width: "20px" }} src="/assets/icon/citizen/smg.png" alt="Permis SMG" />
                                                    </li>
                                                    <li>
                                                        <img style={{ width: "20px" }} src="/assets/icon/citizen/pompe.png" alt="Permis pompe" />
                                                    </li>
                                                    <li>
                                                        <img style={{ width: "20px" }} src="/assets/icon/citizen/rifle.png" alt="Permis Assaut" />
                                                    </li>
                                                    <li>
                                                        <img style={{ width: "20px" }} src="/assets/icon/citizen/snip.png" alt="Permis Sniper" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={"citizen-fiche__coord__right"}>
                                            <div>
                                                <h4>Profession : </h4>
                                                <input type="text" placeholder={"Profession du citoyen"}/>
                                            </div>
                                            <div>
                                                <h4>Lieu de naissance : </h4>
                                                <input type="text" placeholder={"Lieu de naissance du citoyen"}/>
                                            </div>
                                            <div>
                                                <h4>Nationalité : </h4>
                                                <input type="text" placeholder={"Nationalité du citoyen"}/>
                                            </div>
                                            <div>
                                                <h4>Véhicule : </h4>
                                                <input type="text" placeholder={"Véhicule principal du citoyen"}/>
                                            </div>
                                            <div>
                                                <h4>N° de téléphone : </h4>
                                                <input type="text" placeholder={"N° de téléphone du citoyen"}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"citizen-fiche__down"}>
                                    <div className={"citizen-fiche__down_left"}>
                                        <h3>Rapports d'arrestation</h3>
                                        <div className={"container-civil-card"}>
                                            <div className={"civil-card"}>
                                                <div className={"civil-card__info"}>
                                                    <div>
                                                        <img style={{ width: "15px" }} src="/assets/icon/fiche.svg" alt="Permis Sniper" />
                                                        <div>
                                                            <h4>Rapport #xxxxx</h4>
                                                            <p>Date</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <hr/>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <img style={{ width: "15px" }} src="/assets/icon/search.svg" alt="Permis Sniper" />
                                                        </li>
                                                        <li>
                                                            <img style={{ width: "15px" }} src="/assets/icon/edit.svg" alt="Permis Sniper" />
                                                        </li>
                                                        <li>
                                                            <img style={{ width: "15px" }} src="/assets/icon/trashCall.png" alt="Permis Sniper" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"citizen-fiche__down__right"}>
                                        <h3>Rapports de garde à vue</h3>
                                        <div className={"container-civil-card"}>
                                            <div className={"civil-card"}>
                                                <img style={{ width: "15px" }} src="/assets/icon/fiche.svg" alt="Permis Sniper" />
                                                <div>
                                                    <h4>Rapport #xxxxx</h4>
                                                    <p>Date</p>
                                                </div>
                                                <hr/>
                                                <ul>
                                                    <li>
                                                        <img style={{ width: "15px" }} src="/assets/icon/edit.svg" alt="Permis Sniper" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </BoxFiche>
            </>
        );
    }
}


export default PageFicheCitizen;