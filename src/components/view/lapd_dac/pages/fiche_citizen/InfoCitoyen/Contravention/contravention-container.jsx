import React, {useState} from 'react';
import CardContravention from "./Amende/card-contravention";
import CardFourriere from "./Fourrière/card-fourriere";

function Contravention({ contraventions, type }) {

    const [contraventionList, setContraventionList] = useState(contraventions);


    // Fonction de suppression
    function handleDelete(index) {
        // Créez une copie de la liste de contraventions
        const updatedContraventions = [...contraventionList];
        // Supprimez l'élément à l'index donné
        updatedContraventions.splice(index, 1);
        // Mettez à jour la liste de contraventions avec la nouvelle liste sans l'élément supprimé
        setContraventionList(updatedContraventions);
    }


    return (
        <>
            <div className={"contraventions-container"}>
                <div className={"contraventions-content"}>
                    <div>
                        <h3>{type === "fourriere" ? "Fourrière" : "Contraventions"}</h3>
                        {contraventionList.length === 0 ? (
                            <h4 style={{textAlign: "center", marginTop: "5px", fontSize: '10px'}}>Aucune données pour ce citoyen</h4>
                        ) : (
                            <div className={"card-contrat-container"}>
                                {contraventionList.map((dispatch, index) => (
                                    type === "fourriere" ? (
                                        <CardFourriere
                                            key={index}
                                            title={dispatch.title}
                                            date={dispatch.date}
                                            modalDelete={dispatch.modalDelete}
                                            isGood={dispatch.isGood}
                                            onDelete={() => handleDelete(index)} // Passer une fonction anonyme
                                        />
                                    ) : (
                                        <CardContravention
                                            key={index}
                                            title={dispatch.title}
                                            date={dispatch.date}
                                            modalDelete={dispatch.modalDelete}
                                            isGood={dispatch.isGood}
                                            onDelete={() => handleDelete(index)} // Passer une fonction anonyme
                                        />
                                    )
                                ))}
                                <div className={"buttonAddContrat"}>
                                    <img style={{ width: "15px" }} src="/assets/icon/plus.svg" alt="Permis Sniper" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contravention;
