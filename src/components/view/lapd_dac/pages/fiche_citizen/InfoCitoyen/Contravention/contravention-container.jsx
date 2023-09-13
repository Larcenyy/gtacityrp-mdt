import React from 'react';
import CardContravention from "./Amende/card-contravention";
import CardFourriere from "./Fourrière/card-fourriere";

function Contravention({ contraventions, type }) {
    return (
        <>
            <div className={"contraventions-container"}>
                <div className={"contraventions-content"}>
                    <div>
                        <h3>{type === "fourriere" ? "Fourrière" : "Contraventions"}</h3>
                        {contraventions.length === 0 ? (
                            <h4 style={{textAlign: "center", marginTop: "5px", fontSize: '10px'}}>Aucune données pour ce citoyen</h4>
                        ) : (
                            <div className={"card-contrat-container"}>
                                {contraventions.map((dispatch, index) => (
                                    type === "fourriere" ? (
                                        <CardFourriere
                                            key={index}
                                            title={dispatch.title}
                                            date={dispatch.date}
                                            modalDelete={dispatch.modalDelete}
                                            isGood={dispatch.isGood}
                                        />
                                    ) : (
                                        <CardContravention
                                            key={index}
                                            title={dispatch.title}
                                            date={dispatch.date}
                                            modalDelete={dispatch.modalDelete}
                                            isGood={dispatch.isGood}
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
