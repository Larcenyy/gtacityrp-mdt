import React, { useState } from 'react';
import CardCitoyen from "./CardCitoyen/card-citoyen";
import { listeCitoyenData } from "./listeCitoyenData";
import { Link } from "react-router-dom";

function ListeCitoyen({ onCitizenSelect }) {
    const [activeCardIndex, setActiveCardIndex] = useState(-1);

    const handleCardClick = (index) => {
        console.log("Card clicked:", index);
        if (activeCardIndex === index) {
            setActiveCardIndex(-1);
            onCitizenSelect(null);
        } else {
            setActiveCardIndex(index);
            onCitizenSelect(listeCitoyenData[index].citizenId); // Transmettez l'ID du citoyen
            console.log("Card ID CLIQUER :", listeCitoyenData[index].citizenId);
        }
    };

    return (
        <div className={"citizen-list"}>
            <div className={"search-container"}>
                <input className="search-bar" type="text" placeholder={"Rechercher un citoyen "} />
                <div className={"search-icon"}></div>
            </div>
            <div className={'card-container'}>
                {listeCitoyenData.map((card, index) => (
                    <CardCitoyen
                        key={index}
                        title={card.title}
                        dateBirthday={card.dateBirthday}
                        modalDelete={card.modalDelete}
                        isActive={index === activeCardIndex}
                        onClick={() => handleCardClick(index)}
                        citizenId={card.citizenId} // Passez l'ID du citoyen à la carte
                    />
                ))}
            </div>
            <div className={"newFiche"}>
                <Link to="/page/create-citoyens" className="submit__field">
                    <span data-modal="add_fiche_citizen" className={"openModal"}>+ Créer une fiche citoyen</span>
                </Link>
            </div>
        </div>
    );
}

export default ListeCitoyen;
