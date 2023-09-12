import React from 'react';

import RapportCard from "./rapportCard";
import {rapportArrest} from "./rapportArrest";
function RapportArrest() {
    return (
        <div className={"citizen-fiche__down_left"}>
            <h3>Rapports d'arrestation</h3>
            <div className={"container-civil-card"}>
                {rapportArrest.map((dispatch, index) => (
                    <RapportCard
                        key={index}
                        title={dispatch.title}
                        date={dispatch.dateBirthday}
                        modalDelete={dispatch.modalDelete}
                        modalEdit={dispatch.modalEdit}
                        modalSee={dispatch.modalSee}
                    />
                ))}
                <div className={"add-card"}>
                    <img style={{ width: "15px" }} src="/assets/icon/plus.svg"/>
                </div>
            </div>
        </div>
    );
}

export default RapportArrest;