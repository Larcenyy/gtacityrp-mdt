import React, {Component} from "react";
import ListeCitoyen from "../ListeCitoyen/liste-citoyen";
import BoxFiche from "../../../boxFiche/boxFiche";
import PermisCitoyen from "../InfoCitoyen/Permis/permis-citoyen";
import {Link} from "react-router-dom";


class CreateFicheCitizen extends Component {
    constructor(props) {
        super(props);

        // Initialisez les états pour les permis ici
        this.state = {
            citoyenPermis: {
                vehicle: false,
                air: false,
                boat: false,
                pistol: false,
                smg: false,
                pompe: false,
                assaut: false,
                sniper: false,
            },
        };
    }

    togglePermis = (type) => {
        // Copiez l'objet des permis depuis l'état
        const updatedPermis = { ...this.state.citoyenPermis };

        // Inversez la valeur du permis spécifique
        updatedPermis[type] = !updatedPermis[type];

        // Mettez à jour l'état des permis
        this.setState({ citoyenPermis: updatedPermis });
    };

    render() {
        return (
            <>
                <BoxFiche title="Créer une fiche citoyen" classSpec={"app__content app__home"}>
                    <div className="citizenContainer">
                        <div className="citizen-left">
                            <div style={{ zIndex: "1", filter: 'blur(3px)', height: '100%'}}>
                                <ListeCitoyen/>
                            </div>
                            <div className={"blocked"}>
                                <img style={{ width: "50px" }} src="/assets/icon/secure.svg"/>
                                <p>Création d'un fiche <br/>
                                citoyen en cours...</p>
                            </div>
                        </div>
                        <div className="citizen-right">
                            <div className={"citizen-fiche"}>
                                <div className={"citizen-fiche__top"}>
                                    <form action="#">
                                        <div className={"citizen-fiche__info"}>
                                            <div>
                                                <button className={"submit goodAction"} type='submit'>
                                                    <img style={{ width: "18px" }} src="/assets/icon/valid_circle.svg" alt="Créer" />
                                                    Créer la fiche
                                                </button>
                                            </div>
                                            <div className={"citizenName"}>
                                                <div className={"citizenAvatar"}>
                                                    <img style={{ width: "50px" }} src="/assets/icon/camera.svg" alt="photo" />
                                                </div>
                                                <div>
                                                    <h4>NOM Prénom</h4>
                                                    <small>xx ans - sexe</small>
                                                </div>
                                            </div>
                                            <div className={""}>
                                                <Link style={{textDecoration: "none"}} to={"/page/fiches-citoyens"}>
                                                    <button className={"submit  deleteAction"}><img style={{ width: "18px" }} src="/assets/icon/invalide_cercle.svg" alt="Supprimer" />Annuler</button>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={"citizen-fiche__coord"}>
                                            <div className={"citizen-fiche__coord__left"}>
                                                <div>
                                                    <h4>Adresse: </h4>
                                                    <input type="text" required={true} placeholder={"Adresse de résidence du citoyen"}/>
                                                </div>
                                                <div>
                                                    <h4>Date de naissance : </h4>
                                                    <input type="text"  required={true} placeholder={"Profession du citoyen"}/>
                                                </div>
                                                <div>
                                                    <div>
                                                        <h4>Taille : </h4>
                                                        <input type="text"  required={true} placeholder={"Taille du citoyen"}/>
                                                    </div>
                                                    <div>
                                                        <h4>Masse : </h4>
                                                        <input type="text"  required={true} placeholder={"Masse du citoyen"}/>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4>Permis de conduire : </h4>
                                                    <ul>
                                                        <li className={this.state.citoyenPermis.vehicle ? 'allowed' : ''} onClick={() => this.togglePermis('vehicle')}>
                                                            <img style={{ width: "20px" }} src="/assets/icon/citizen/car.svg" alt="permis voiture" />
                                                        </li>
                                                        <li className={this.state.citoyenPermis.air ? 'allowed' : ''} onClick={() => this.togglePermis('air')}>
                                                            <img style={{ width: "20px" }} src="/assets/icon/citizen/air.svg" alt="permis avion" />
                                                        </li>
                                                        <li className={this.state.citoyenPermis.boat ? 'allowed' : ''} onClick={() => this.togglePermis('boat')}>
                                                            <img style={{ width: "20px" }} src="/assets/icon/citizen/boat.svg" alt="permis bateau" />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4>Permis d'arme : </h4>
                                                    <ul>
                                                        <li className={this.state.citoyenPermis.pistol ? 'allowed' : ''} onClick={() => this.togglePermis('pistol')}>
                                                            <img style={{ width: '20px' }} src="/assets/icon/citizen/pistol.svg" alt="Permis pistolet" />
                                                        </li>
                                                        <li className={this.state.citoyenPermis.smg ? 'allowed' : ''} onClick={() => this.togglePermis('smg')}>
                                                            <img style={{ width: '20px' }} src="/assets/icon/citizen/smg.svg" alt="Permis SMG" />
                                                        </li>
                                                        <li className={this.state.citoyenPermis.pompe ? 'allowed' : ''} onClick={() => this.togglePermis('pompe')}>
                                                            <img style={{ width: '20px' }} src="/assets/icon/citizen/shotgun.svg" alt="Permis pompe" />
                                                        </li>
                                                        <li className={this.state.citoyenPermis.assaut ? 'allowed' : ''} onClick={() => this.togglePermis('assaut')}>
                                                            <img style={{ width: '20px' }} src="/assets/icon/citizen/rifle.svg" alt="Permis Assaut" />
                                                        </li>
                                                        <li className={this.state.citoyenPermis.sniper ? 'allowed' : ''} onClick={() => this.togglePermis('sniper')}>
                                                            <img style={{ width: '20px' }} src="/assets/icon/citizen/snip.svg" alt="Permis Sniper" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className={"citizen-fiche__coord__right"}>
                                                <div>
                                                    <h4>Profession : </h4>
                                                    <input type="text" required={true} placeholder={"Profession du citoyen"}/>
                                                </div>
                                                <div>
                                                    <h4>Lieu de naissance : </h4>
                                                    <input type="text" required={true} placeholder={"Lieu de naissance du citoyen"}/>
                                                </div>
                                                <div>
                                                    <h4>Nationalité : </h4>
                                                    <input type="text" required={true} placeholder={"Nationalité du citoyen"}/>
                                                </div>
                                                <div>
                                                    <h4>Véhicule : </h4>
                                                    <input type="text" required={true} placeholder={"Véhicule principal du citoyen"}/>
                                                </div>
                                                <div>
                                                    <h4>N° de téléphone : </h4>
                                                    <input type="text" required={true} placeholder={"N° de téléphone du citoyen"}/>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </BoxFiche>
            </>
        );
    }
}


export default CreateFicheCitizen;