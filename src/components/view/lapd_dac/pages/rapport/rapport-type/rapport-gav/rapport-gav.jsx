import React from 'react';
import {useLocation} from "react-router-dom";

function RapportGAV() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name') || ''; // Utilisez le nom du citoyen ou une valeur par défaut


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
                            value={name}
                            placeholder={"Pour lier un citoyen à cette fiche"}
                        />
                        <img style={{ width: "15px" }} src="/assets/images/icon/search.svg" alt="Rechercher" />
                    </div>
                </div>
                <div>
                    <p>Lier un officier en charge :</p>
                    <div className={"search-container"}>
                        <input
                            className="search-bar"
                            type="text"
                            required={true}
                            placeholder={"Pour lier un officier en charge"}
                        />
                        <img style={{ width: "15px" }} src="/assets/images/icon/search.svg" alt="Rechercher" />
                    </div>
                </div>
                <div id={"dateGAV"}>
                    <div>
                        <p>Date et heure de début de la GAV :</p>
                        <div className={"search-container"}>
                            <input
                                className="search-bar"
                                type="text"
                                required={true}
                                placeholder={"Date"}
                            />
                            <img style={{ width: "15px" }} src="/assets/images/icon/calendar.svg" alt="Date" />
                        </div>
                        <div className={"search-container"}>
                            <input
                                className="search-bar"
                                type="text"
                                required={true}
                                placeholder={"Heure"}
                            />
                            <img style={{ width: "15px" }} src="/assets/images/icon/clock.svg" alt="Date" />
                        </div>
                    </div>
                </div>
                <div>
                    <p>Photo de l'individu:</p>
                    <div className={"search-container"}>
                        <img style={{ width: "25px" }} src="/assets/images/icon/camera.svg" alt="Rechercher" />
                        <input
                                className="search-bar"
                                type="text"
                                required={true}
                                placeholder={"Prendre une photo de l'individu"}
                            />
                    </div>
                </div>
                <div>
                    <p>Lier un rapport de saisie:</p>
                    <div className={"search-container"}>
                        <input
                            className="search-bar"
                            type="text"
                            required={true}
                            placeholder={"Pour lier un officier en charge"}
                        />
                        <img style={{ width: "15px" }} src="/assets/images/icon/search.svg" alt="Rechercher" />
                    </div>
                </div>
                <div>
                    <p>Qualification de la garde à vue: </p>
                    <input type="text" required={true} placeholder={"Qualification de l'infraction"}/>
                </div>
                <div className={"area"}>
                    <p>Rapport de le la garde à vue:</p>
                    <textarea
                        placeholder={"Rapport détaillé menant à la mise en garde à vue"}
                        rows="19"
                        required={true}>
                    </textarea>
                </div>
                <button className={"claim send"} type='submit'>ENREGISTRER</button>
            </form>
        </>
    );
}

export default RapportGAV;
