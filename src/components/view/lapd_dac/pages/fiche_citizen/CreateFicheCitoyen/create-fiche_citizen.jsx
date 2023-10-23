import React, { useState } from "react";
import ListeCitoyen from "../ListeCitoyen/liste-citoyen";
import BoxFiche from "../../../boxFiche/boxFiche";
import PermisCitoyen from "../InfoCitoyen/Permis/permis-citoyen";
import { Link } from "react-router-dom";

function CreateFicheCitizen() {
    const getUrl = window.location.href;
    const isLafd = getUrl.includes("lafd");

    const [citoyenPermis, setCitoyenPermis] = useState({
        vehicle: false,
        air: false,
        boat: false,
        pistol: false,
        smg: false,
        pompe: false,
        assaut: false,
        sniper: false,
    });

    const togglePermis = (type) => {
        const updatedPermis = { ...citoyenPermis };
        updatedPermis[type] = !updatedPermis[type];
        setCitoyenPermis(updatedPermis);
    };

    return (
        <>
            <BoxFiche title="Créer une fiche citoyen" classSpec={"app__content app__home"}>
                <div className="citizenContainer">
                    <div className="citizen-left">
                        <div style={{ zIndex: "1", filter: 'blur(3px)', height: '100%'}}>
                            <ListeCitoyen/>
                        </div>
                        <div className={"blocked"}>
                            <img style={{ width: "50px" }} src="/assets/images/icon/secure.svg"/>
                            <p>Création d'une fiche <br/>{isLafd ? "patient" : "citoyen"} en cours..</p>
                        </div>
                    </div>
                    <div className="citizen-right">
                        <div className={"citizen-fiche"}>
                            <div className={"citizen-fiche__top"}>
                                <form action="#">
                                    <div className={"citizen-fiche__info"}>
                                        <div>
                                            <button className={"submit goodAction"} type='submit'>
                                                <img style={{ width: "18px" }} src="/assets/images/icon/valid_circle.svg" alt="Créer" />
                                                Créer la fiche
                                            </button>
                                        </div>
                                        <div className={"citizenName"}>
                                            <div className={"citizenAvatar"}>
                                                <img style={{ width: "50px" }} src="/assets/images/icon/camera.svg" alt="photo" />
                                            </div>
                                            <div className={"inputCivilInfo"}>
                                                <input type="text" name={"name"} required={true} placeholder={"NOM PRENOM"}/>
                                                <small>
                                                    <div>
                                                        18 ans
                                                    </div>
                                                    -
                                                    <input type="text" name={"sexe"} required={true} placeholder={"Homme/Femme"}/>
                                                </small>
                                            </div>
                                        </div>
                                        <div className={""}>
                                            <Link style={{textDecoration: "none"}} to={isLafd ? "/lafd/page/fiches-citoyens" : "/lapd/page/fiches-citoyens"}>
                                                <button className={"submit  deleteAction"}><img style={{ width: "18px" }} src="/assets/images/icon/invalide_cercle.svg" alt="Supprimer" />Annuler</button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={"citizen-fiche__coord"}>
                                        <div className={"citizen-fiche__coord__left"}>
                                            <div>
                                                <h4>Adresse: </h4>
                                                <input name={"adresse"} type="text" required={true} placeholder={isLafd ? "Adresse du patient" : "Adresse du citoyen"}/>
                                            </div>
                                            <div>
                                                <h4>Date de naissance : </h4>
                                                <input name={"date"} type="text"  required={true} placeholder={"Date de naissance"}/>
                                            </div>
                                            <div>
                                                <div>
                                                    <h4>Taille : </h4>
                                                    <input type="text" name={"taille"} required={true} placeholder={isLafd ? "Taille du patient" : "Taille du citoyen"}/>
                                                </div>
                                                <div>
                                                    <h4>Masse : </h4>
                                                    <input type="text" name={"masse"} required={true} placeholder={isLafd ? "Masse du patient" : "Masse du citoyen"}/>
                                                </div>
                                            </div>
                                            <div>
                                                <h4>Permis de conduire : </h4>
                                                <ul>
                                                    <li className={citoyenPermis.vehicle ? 'allowed' : ''} onClick={() => togglePermis('vehicle')}>
                                                        <img style={{ width: '20px' }} src="/assets/images/icon/citizen/car.svg" alt="permis voiture" />
                                                    </li>
                                                    <li className={citoyenPermis.air ? 'allowed' : ''} onClick={() => togglePermis('air')}>
                                                        <img style={{ width: '20px' }} src="/assets/images/icon/citizen/air.svg" alt="permis avion" />
                                                    </li>
                                                    <li className={citoyenPermis.boat ? 'allowed' : ''} onClick={() => togglePermis('boat')}>
                                                        <img style={{ width: '20px' }} src="/assets/images/icon/citizen/boat.svg" alt="permis bateau" />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4>Permis d'arme : </h4>
                                                <ul>
                                                    <li className={citoyenPermis.pistol ? 'allowed' : ''} onClick={() => togglePermis('pistol')}>
                                                        <img style={{ width: '20px' }} src="/assets/images/icon/citizen/pistol.svg" alt="Permis pistolet" />
                                                    </li>
                                                    <li className={citoyenPermis.smg ? 'allowed' : ''} onClick={() => togglePermis('smg')}>
                                                        <img style={{ width: '20px' }} src="/assets/images/icon/citizen/smg.svg" alt="Permis SMG" />
                                                    </li>
                                                    <li className={citoyenPermis.pompe ? 'allowed' : ''} onClick={() => togglePermis('pompe')}>
                                                        <img style={{ width: '20px' }} src="/assets/images/icon/citizen/shotgun.svg" alt="Permis pompe" />
                                                    </li>
                                                    <li className={citoyenPermis.assaut ? 'allowed' : ''} onClick={() => togglePermis('assaut')}>
                                                        <img style={{ width: '20px' }} src="/assets/images/icon/citizen/rifle.svg" alt="Permis Assaut" />
                                                    </li>
                                                    <li className={citoyenPermis.sniper ? 'allowed' : ''} onClick={() => togglePermis('sniper')}>
                                                        <img style={{ width: '20px' }} src="/assets/images/icon/citizen/snip.svg" alt="Permis Sniper" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={"citizen-fiche__coord__right"}>
                                            <div>
                                                <h4>Profession : </h4>
                                                <input name={"profession"} type="text" required={true} placeholder={isLafd ? "Profession du patient" : "Profession du citoyen"}/>
                                            </div>
                                            <div>
                                                <h4>Lieu de naissance : </h4>
                                                <input name={"naissance"} type="text" required={true} placeholder={"Lieu de naissance"}/>
                                            </div>
                                            <div>
                                                <h4>Nationalité : </h4>
                                                <input name={"nationalite"} type="text" required={true} placeholder={isLafd ? "Nationalité du patient" : "Nationalité du citoyen"}/>
                                            </div>
                                            <div>
                                                <h4>Véhicule : </h4>
                                                <input name={"vehicle"} type="text" required={true} placeholder={isLafd ? "Véhicule du patient" : "Véhicule du citoyen"}/>
                                            </div>
                                            <div>
                                                <h4>N° de téléphone : </h4>
                                                <input name={"phone"} type="text" required={true} placeholder={isLafd ? "N° de telephone du patient" : "N° de telephone du citoyen"}/>
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

export default CreateFicheCitizen;
