import React, {useState} from 'react';
import {useLocation} from "react-router-dom";


function RapportArrest() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name') || ''; // Utilisez le nom du citoyen ou une valeur par défaut

    const [valueName, setValueName] = useState(name);

    const handleInputChange = (event) => {
        setValueName(event.target.value);
    };

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
                            value={valueName}
                            onChange={handleInputChange}
                            placeholder={"Pour lier un citoyen à cette fiche"}
                        />
                        <img style={{ width: "15px" }} src="/assets/images/icon/search.svg" alt="Rechercher" />
                    </div>
                </div>
                <div>
                    <p>Qualification de l'infraction : </p>
                    <input type="text" required={true} placeholder={"Qualification de l'infraction"}/>
                </div>
                <div className={"area"}>
                    <p>Rapport de l'arrestation :</p>
                    <textarea
                        placeholder={"Rapport détaillé menant à l'arrestation"}
                        rows="19"
                        required={true}>
                    </textarea>
                </div>
                <button className={"claim send"} type='submit'>ENREGISTRER</button>
            </form>
        </>
    );
}

export default RapportArrest;
