import React, { useState } from 'react';
import RapportArrest from "./RapportArrestation/rapport-arrest";
import RapportGAV from "./RapportGAV/rapport-gav";
import Contravention from "./Contravention/contravention-container";

function InfoCitoyen() {

    const [permis, setPermis] = useState({
        pistol: false,
        smg: false,
        pompe: false,
        assaut: false,
        sniper: false,

        vehicle: false,
        air: false,
        boat: false,
    });

    const togglePermis = (data) => {
        setPermis({
            ...permis,
            [data]: !permis[data],
        });
    };

    return (
        <div className={"citizen-fiche"}>
            <div className={"citizen-fiche__top"}>
                <form action="#">
                    <div className={"citizen-fiche__info"}>
                        <div>
                            <button className={"submit goodAction"} type='submit'>
                                <img style={{ width: "18px" }} src="/assets/icon/edit.svg" alt="Supprimer" />
                                Editer la fiche
                            </button>
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
                                <input type="text" required={true} placeholder={"Adresse de résidence du citoyen"}/>
                            </div>
                            <div>
                                <h4>Date de naissance : </h4>
                                <input type="text"  required={true} placeholder={"Profession du citoyen"}/>
                            </div>
                            <div>
                                <h4>Permis de conduire : </h4>
                                <ul>
                                    <li className={permis.vehicle ? 'allowed' : ''} onClick={() => togglePermis('vehicle')}>
                                        <img style={{ width: "20px" }} src="/assets/icon/citizen/car.png" alt="permis voiture" />
                                    </li>
                                    <li className={permis.air ? 'allowed' : ''} onClick={() => togglePermis('air')}>
                                        <img style={{ width: "20px" }} src="/assets/icon/citizen/plane.png" alt="permis voiture" />
                                    </li>
                                    <li className={permis.boat ? 'allowed' : ''} onClick={() => togglePermis('boat')}>
                                        <img style={{ width: "20px" }} src="/assets/icon/citizen/bateau.png" alt="permis voiture" />
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4>Permis d'arme : </h4>
                                <ul>
                                    <li className={permis.pistol ? 'allowed' : ''} onClick={() => togglePermis('pistol')}>
                                        <img style={{ width: '20px' }} src="/assets/icon/citizen/pistol.png" alt="Permis pistolet" />
                                    </li>
                                    <li className={permis.smg ? 'allowed' : ''} onClick={() => togglePermis('smg')}>
                                        <img style={{ width: '20px' }} src="/assets/icon/citizen/smg.png" alt="Permis SMG" />
                                    </li>
                                    <li className={permis.pompe ? 'allowed' : ''} onClick={() => togglePermis('pompe')}>
                                        <img style={{ width: '20px' }} src="/assets/icon/citizen/pompe.png" alt="Permis pompe" />
                                    </li>
                                    <li className={permis.assaut ? 'allowed' : ''} onClick={() => togglePermis('assaut')}>
                                        <img style={{ width: '20px' }} src="/assets/icon/citizen/rifle.png" alt="Permis Assaut" />
                                    </li>
                                    <li className={permis.sniper ? 'allowed' : ''} onClick={() => togglePermis('sniper')}>
                                        <img style={{ width: '20px' }} src="/assets/icon/citizen/snip.png" alt="Permis Sniper" />
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
            <div className={"citizen-fiche__down"}>
                <RapportArrest/>
                <RapportGAV/>
            </div>
            <Contravention/>
        </div>
    );
}

export default InfoCitoyen;