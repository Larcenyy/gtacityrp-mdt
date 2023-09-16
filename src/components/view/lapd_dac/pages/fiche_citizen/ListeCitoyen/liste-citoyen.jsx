import React, {useEffect, useState} from 'react';
import CardCitoyen from "./CardCitoyen/card-citoyen";
import { listeCitoyenData, supprimerCitoyenParId } from "./listeCitoyenData"; // Importez supprimerCitoyenParId

import {Link, useLocation} from "react-router-dom";

function ListeCitoyen({onCitizenSelect}) {
    const [activeCardIndex, setActiveCardIndex] = useState(-1);
    const [searchValue, setSearchValue] = useState("");
    const [citizenList, setCitzenList] = useState(listeCitoyenData);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const idURL = searchParams.get('id') || ''; // Utilisez le nom du citoyen ou une valeur par défaut


    const handleCardClick = (index) => {
        if (activeCardIndex === index) {
            // Cliquez à nouveau sur la même carte, désélectionnez-la
            setActiveCardIndex(-1);
            onCitizenSelect(null);
        } else {
            setActiveCardIndex(index);
            onCitizenSelect(listeCitoyenData[index].citizenId); // Transmettez l'ID du citoyen
        }
    };

    // Utilisez useEffect pour activer la carte correspondant à l'ID de l'URL
    useEffect(() => {
        if (idURL) {
            const index = listeCitoyenData.findIndex((citizen) => citizen.citizenId === parseInt(idURL));
            if (index !== -1) {
                setActiveCardIndex(index);
                onCitizenSelect(parseInt(idURL));
            } else {
                // Si l'ID dans l'URL ne correspond à aucun citoyen, désélectionnez la carte active
                setActiveCardIndex(-1);
                onCitizenSelect(null);
            }
        }
    }, [idURL, onCitizenSelect]);

    // Fonction de suppression
    const handleDelete = (index) => {
        const citizenIdToDelete = citizenList[index].citizenId;

        // Utilisez la méthode existante pour supprimer le citoyen
        supprimerCitoyenParId(citizenIdToDelete);

        // Mettez à jour la liste des citoyens après la suppression
        const updatedCitizenList = citizenList.filter((citizen) => citizen.citizenId !== citizenIdToDelete);
        setCitzenList(updatedCitizenList);
    }

    return (
        <div className={"citizen-list"}>
            <div className={"search-container"}>
                <input
                    className="search-bar"
                    type="text"
                    value={searchValue ?? ""}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder={"Rechercher un citoyen "}
                />
                <div className={"search-icon"}></div>
            </div>
            <div className={'card-container'}>
                {listeCitoyenData.filter(card => card.title.toLowerCase().includes(searchValue.toLowerCase())).map((card, index) => (
                    <CardCitoyen
                        key={index}
                        title={card.title}
                        dateBirthday={card.dateBirthday}
                        isActive={index === activeCardIndex}
                        onClick={() => handleCardClick(index)}
                        onDelete={() => handleDelete(index)}
                        citizenId={card.citizenId}
                    />
                ))}
            </div>
            <Link to="/page/create-citoyens" className="newFiche submit__field">
                <span>+ Créer une fiche citoyen</span>
            </Link>
        </div>
    );
}

export default ListeCitoyen;
