import React from 'react';

import CardContravention from "./Amende/card-contravention";
import {amendeData} from "./Amende/amendeData";
import {fourriereData} from "./Fourrière/fourriereData";
import CardFourriere from "./Fourrière/card-fourriere";

function Contravention() {
    return (
        <>
            <div className={"contraventions-container"}>
                <div className={"contraventions-content"}>
                    <div>
                        <h3>Contraventions</h3>
                        <div className={"card-contrat-container"}>
                            {amendeData.map((dispatch, index) => (
                                <CardContravention
                                    key={index}
                                    title={dispatch.title}
                                    date={dispatch.date}
                                    modalDelete={dispatch.modalDelete}
                                    isGood={dispatch.isGood}
                                />
                            ))}
                            <div className={"buttonAddContrat"}>
                                <img style={{ width: "15px" }} src="/assets/icon/plus.svg" alt="Permis Sniper" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"contraventions-container"}>
                <div className={"contraventions-content"}>
                    <div>
                        <h3>Fourrière</h3>
                        <div className={"card-contrat-container"}>
                            {fourriereData.map((dispatch, index) => (
                                <CardFourriere
                                    key={index}
                                    title={dispatch.title}
                                    date={dispatch.date}
                                    modalDelete={dispatch.modalDelete}
                                    isGood={dispatch.isGood}
                                />
                            ))}
                            <div className={"buttonAddContrat"}>
                                <img style={{ width: "15px", fill: "red" }} src="/assets/icon/plus.svg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contravention;