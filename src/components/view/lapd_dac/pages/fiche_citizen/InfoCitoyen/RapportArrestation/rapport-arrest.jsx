import React, {useState} from 'react';
import RapportCard from "./rapportCard";
import {Link} from "react-router-dom";

function RapportArrest({ reports }) {

    // Définir le state pour stocker les rapports
    const [rapportList, setRapportList] = useState(reports);

    // Méthode pour gérer la suppression d'une carte
    function handleDelete(index) {
        // Créez une copie de la liste de contraventions
        const updateAmende = [...rapportList];
        // Supprimez l'élément à l'index donné
        updateAmende.splice(index, 1);
        // Mettez à jour la liste de contraventions avec la nouvelle liste sans l'élément supprimé
        setRapportList(updateAmende);
    }

    return (
        <div className={"citizen-fiche__down_left"}>
            <h3>Rapports d'arrestation</h3>
            <div className={"container-civil-card"}>
                {reports.map((dispatch, index) => (
                    <RapportCard
                        key={index}
                        title={dispatch.title}
                        date={dispatch.date}
                        modalEdit={dispatch.modalEdit}
                        onDelete={() => handleDelete(index)}
                    />
                ))}
                <Link to="/page/rapport-arrest" className={"add-card"}>
                    <img style={{ width: "15px" }} src="/assets/icon/plus.svg" alt={"Ajouter"} />
                </Link>
            </div>
        </div>
    );
}

export default RapportArrest;
