import React, { useEffect, useState } from 'react';
import RapportGAVCard from "./RapportArrest/rapportCard";
import RapportArrestCard from "./RapportArrest/rapportCard";
import {Link} from "react-router-dom";

function Rapport({ rapport, type, citizenName, citizenId }) {

    const [rapportList, setRapportList] = useState(rapport);
    const getUrl = window.location.href;
    const isLafd = getUrl.includes("lafd");

    useEffect(() => {
        setRapportList(rapport);
    }, [citizenId, rapport]);

    // Fonction de suppression
    function handleDelete(index) {
        // Créez une copie de la liste de contraventions
        const updatedRapport = [...rapportList];
        // Supprimez l'élément à l'index donné
        updatedRapport.splice(index, 1);
        // Mettez à jour la liste de contraventions avec la nouvelle liste sans l'élément supprimé
        setRapportList(updatedRapport);
    }


    return (
        <div className={type === "Arrest" ? "citizen-fiche__down_left" : "citizen-fiche__down__right"}>
            <h3>{type === "Arrest" ? "Rapports d'arrestation" : "Rapport de garde à vues"}</h3>
            {rapportList.length === 0 ? (
                <h4 style={{ textAlign: "center", marginTop: "5px", fontSize: '10px' }}>Aucune données pour ce citoyen</h4>
            ) : (
                <>
                    <div className={"container-civil-card"}>
                        {rapportList.map((dispatch, index) => (
                            type === "Arrest" ? (
                                <RapportArrestCard
                                    key={index}
                                    rapportID={dispatch.id}
                                    title={dispatch.title}
                                    date={dispatch.date}
                                    modalDelete={dispatch.modalDelete}
                                    isGood={dispatch.isGood}
                                    linkView={`/page/view-rapportArrest?id=${dispatch.id}`}
                                    linkEdit={`/page/view-editArrest?id=${dispatch.id}`}
                                    onDelete={() => handleDelete(index)}
                                />
                            ) : (
                                <RapportGAVCard
                                    key={index}
                                    rapportID={dispatch.id}
                                    title={dispatch.title}
                                    date={dispatch.date}
                                    modalDelete={dispatch.modalDelete}
                                    isGood={dispatch.isGood}
                                    linkView={`/page/view-rapportGAV?id=${dispatch.id}`}
                                    linkEdit={`/page/view-editGAV?id=${dispatch.id}`}
                                    onDelete={() => handleDelete(index)}
                                />
                            )
                        ))}
                        <Link to={type === "Arrest" ? `/lapd/page/rapport-arrest?name=${citizenName}` : `/lapd/page/rapport-gav?name=${citizenName}`} className={"add-card"}>
                            <img style={{ width: "15px" }} src="/assets/images/icon/plus.svg" alt={"Ajouter"} />
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}

export default Rapport;
