import React from 'react';

function InfoCitoyen() {
    return (
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
                                <li>
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
                            <input type="text" required={true} placeholder={"Profession du citoyen"}/>
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
                        {Array.from({ length: 3 }, (_, index) => (
                            <div className={`civil-card`}>
                                <div className={"civil-card__info"}>
                                    <div className={"civil-card__info__left"}>
                                        <div className={"civil-card__info__left__img"}>
                                            <img style={{ width: "15px" }} src="/assets/icon/fiche.png" alt="Fiche" />
                                        </div>
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
                                            <img style={{ width: "20px" }} src="/assets/icon/eyes.svg" alt="Voir" />
                                        </li>
                                        <li>
                                            <img style={{ width: "15px" }} src="/assets/icon/edit.svg" alt="Editer" />
                                        </li>
                                        <li>
                                            <span data-modal="card_delete" className={'openModal'}><img style={{ width: "15px" }} src="/assets/icon/trashCall.png" alt="Supprimer" /></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                        <div className={"add-card"}>
                            <img style={{ width: "15px" }} src="/assets/icon/plus.svg" alt="Permis Sniper" />
                        </div>
                    </div>
                </div>
                <div className={"citizen-fiche__down__right"}>
                    <h3>Rapports de garde à vue</h3>
                    <div className={"container-civil-card"}>
                        {Array.from({ length: 4 }, (_, index) => (
                            <div className={`civil-card`}>
                                <div className={"civil-card__info"}>
                                    <div className={"civil-card__info__left"}>
                                        <div className={"civil-card__info__left__img"}>
                                            <img style={{ width: "15px" }} src="/assets/icon/fiche.png" alt="Fiche" />
                                        </div>
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
                                            <img style={{ width: "20px" }} src="/assets/icon/eyes.svg" alt="Voir" />
                                        </li>
                                        <li>
                                            <img style={{ width: "15px" }} src="/assets/icon/edit.svg" alt="Editer" />
                                        </li>
                                        <li data-modal="delete" className={'openModal'}>
                                            <img style={{ width: "15px" }} src="/assets/icon/trashCall.png" alt="Supprimer" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                        <div className={"add-card"}>
                            <img style={{ width: "15px" }} src="/assets/icon/plus.svg" alt="Permis Sniper" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={"contraventions-container"}>
                <div className={"contraventions-content"}>
                    <div>
                        <h3>Contraventions</h3>
                        <div className={"card-contrat-container"}>
                            <div className={"card-contrat"}>
                                <div className={"card-contrat__info"}>
                                    <div className={"card-contrat__info__img"}>
                                        <img style={{ width: "20px" }} src="/assets/icon/radarScan.svg" alt="Photo" />
                                    </div>
                                    <div>
                                        <h4>Amende #xxxxx</h4>
                                        <p>Date -
                                            <span className={"textGood"}>
                                            <img style={{ width: "10px" }} src="/assets/icon/valid.svg" alt="Supprimer" />
                                            Payé</span>
                                        </p>
                                    </div>
                                    <div>
                                        <hr/>
                                    </div>
                                    <div>
                                        <img style={{ width: "15px" }} src="/assets/icon/trashCall.png" alt="Supprimer" />
                                    </div>
                                </div>
                            </div>
                            <div className={"card-contrat"}>
                                <div className={"card-contrat__info"}>
                                    <div className={"card-contrat__info__img"}>
                                        <img style={{ width: "15px" }} src="/assets/icon/radarScan.svg" alt="Photo" />
                                    </div>
                                    <div>
                                        <h4>Amende #xxxxx</h4>
                                        <p>Date -
                                            <span className={"textBad"}>
                                            <img style={{ width: "10px" }} src="/assets/icon/invalide.svg" alt="Supprimer" />
                                            Impayé</span>
                                        </p>
                                    </div>
                                    <div>
                                        <hr/>
                                    </div>
                                    <div>
                                        <img style={{ width: "15px" }} src="/assets/icon/trashCall.png" alt="Supprimer" />
                                    </div>
                                </div>
                            </div>
                            <div className={"buttonAddContrat"}>
                                <img style={{ width: "15px" }} src="/assets/icon/plus.svg" alt="Permis Sniper" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"contraventions-container"}>
                <div className={"contraventions-content"}>
                    <div>
                        <h3>Fourrière</h3>
                        <div className={"card-contrat-container"}>
                            <div className={"card-contrat"}>
                                <div className={"card-contrat__info"}>
                                    <div className={"card-contrat__info__img"}>
                                        <img style={{ width: "15px" }} src="/assets/icon/citizen/car.png" alt="Photo" />
                                    </div>
                                    <div>
                                        <h4>Intervention #xxxxx</h4>
                                        <p>Date -
                                            <span className={"textBad"}>
                                                                    <img style={{ width: "10px" }} src="/assets/icon/invalide.svg" alt="Supprimer" />
                                                                    En fourrière</span>
                                        </p>
                                    </div>
                                    <div>
                                        <hr/>
                                    </div>
                                    <div>
                                        <img style={{ width: "15px" }} src="/assets/icon/trashCall.png" alt="Supprimer" />
                                    </div>
                                </div>
                            </div>
                            <div className={"card-contrat"}>
                                <div className={"card-contrat__info"}>
                                    <div className={"card-contrat__info__img"}>
                                        <img style={{ width: "15px" }} src="/assets/icon/citizen/car.png" alt="Photo" />
                                    </div>
                                    <div>
                                        <h4>Intervention #xxxxx</h4>
                                        <p>Date -
                                            <span className={"textBad"}>
                                                                    <img style={{ width: "10px" }} src="/assets/icon/invalide.svg" alt="Supprimer" />
                                                                    En fourrière</span>
                                        </p>
                                    </div>
                                    <div>
                                        <hr/>
                                    </div>
                                    <div>
                                        <img style={{ width: "15px" }} src="/assets/icon/trashCall.png" alt="Supprimer" />
                                    </div>
                                </div>
                            </div>
                            <div className={"card-contrat"}>
                                <div className={"card-contrat__info"}>
                                    <div className={"card-contrat__info__img"}>
                                        <img style={{ width: "15px" }} src="/assets/icon/citizen/car.png" alt="Photo" />
                                    </div>
                                    <div>
                                        <h4>Intervention #xxxxx</h4>
                                        <p>Date -
                                            <span className={"textGood"}>
                                                                    <img style={{ width: "10px" }} src="/assets/icon/valid.svg" alt="Supprimer" />
                                                                    Libéré</span>
                                        </p>
                                    </div>
                                    <div>
                                        <hr/>
                                    </div>
                                    <div>
                                        <img style={{ width: "15px" }} src="/assets/icon/trashCall.png" alt="Supprimer" />
                                    </div>
                                </div>
                            </div>
                            <div className={"buttonAddContrat"}>
                                <img style={{ width: "15px", fill: "red" }} src="/assets/icon/plus.svg" alt="Permis Sniper" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoCitoyen;