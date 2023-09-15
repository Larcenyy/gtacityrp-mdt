import React, {useState} from 'react';
import {useLocation} from "react-router-dom";


function RapportSaisie() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name') || '';

    const [elementSaisie, setElementSaisie] = useState('');
    const [quantiteSaisie, setQuantiteSaisie] = useState('');
    const [saisieData, setSaisieData] = useState([]); // Utilisez useState pour saisieData

    const handleAddElement = (e) => {
        e.preventDefault(); // Empêche le formulaire de se soumettre

        if (elementSaisie.trim() !== '' && quantiteSaisie.trim() !== '') {
            const nouvelElement = {
                element: elementSaisie,
                qte: quantiteSaisie,
            };

            // Ajoutez le nouvel élément saisi au tableau
            setSaisieData([...saisieData, nouvelElement]);

            // Effacez les champs de saisie
            setElementSaisie('');
            setQuantiteSaisie('');
        }
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
                            value={name}
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
                            {saisieData.map((saisie, index) => (
                                <li>
                                    <div className={"saisieContent"} key={index}>
                                        <span className={"badgeSaisie"}>Type : <strong>{saisie.element}</strong></span>
                                        <span className={"badgeSaisie"}>Qte : x<strong>{saisie.qte}</strong></span>
                                    </div>
                                </li>
                            ))}
                            <div id={"addElement"}>
                                <input
                                    className="search-bar"
                                    type="text"
                                    required={true}
                                    placeholder={"Type d'élément saisi"}
                                    value={elementSaisie}
                                    onChange={(e) => setElementSaisie(e.target.value)}
                                />
                                <div style={{ position: 'relative' }}>
                                    <label style={{ position: "absolute", fontSize: "10px", left: "15px" }}>Qte : x</label>
                                    <input
                                        className="search-bar"
                                        type="text"
                                        required={true}
                                        placeholder={"XX"}
                                        maxLength={"3"}
                                        value={quantiteSaisie}
                                        onChange={(e) => setQuantiteSaisie(e.target.value)}
                                    />
                                </div>
                                <span onClick={handleAddElement} type={"submit"}>
                                    <img
                                        style={{ width: "15px", cursor: "pointer" }}
                                        src="/assets/icon/plusYellow.svg"
                                        alt={"Ajouter un élément"}
                                    />
                                </span>
                            </div>
                        </ul>
                    </div>
                </div>
            </form>
        </>
    );
}

export default RapportSaisie;
