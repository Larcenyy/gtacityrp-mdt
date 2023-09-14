import React from 'react';


function RapportSaisie() {
    return (
        <>
            <form action="">
                <div>
                    <p>Lier un citoyen à la fiche :</p>
                    <div className={"search-container"}>
                        <input
                            className="search-bar"
                            type="text"
                            required={true}
                            placeholder={"Pour lier un citoyen à cette fiche"}
                        />
                        <img style={{ width: "15px" }} src="/assets/icon/search.svg" alt="Rechercher" />
                    </div>
                </div>
                <div>
                    <p>Lier un rapport de garde à vue :</p>
                    <div className={"search-container"}>
                        <input
                            className="search-bar"
                            type="text"
                            required={true}
                            placeholder={"Pour lier un citoyen à cette fiche"}
                        />
                        <img style={{ width: "15px" }} src="/assets/icon/search.svg" alt="Rechercher" />
                    </div>
                </div>
                <div>
                    <p>Éléments saisies :</p>
                    <div className={"container-saisie"}>
                        <ul>
                            <li>
                                <div>
                                    <span className={"badgeSaisie"}>Glock-17</span>
                                    <span className={"badgeSaisie"}>Qte: x1</span>
                                </div>
                            </li>
                            <div id={"addElement"}>
                                <input
                                    className="search-bar"
                                    type="text"
                                    required={true}
                                    placeholder={"Type d'élement saisie"}
                                />
                                <input
                                    className="search-bar"
                                    type="text"
                                    required={true}
                                    placeholder={"Qte: xx"}
                                />
                                <img style={{ width: "15px" }} src="/assets/icon/plusYellow.svg"  alt={"Ajouter un élement"}/>
                            </div>
                        </ul>
                    </div>
                </div>
            </form>
        </>
    );
}

export default RapportSaisie;
