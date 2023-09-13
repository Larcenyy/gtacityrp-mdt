import React from 'react';
import RapportCard from "../RapportArrestation/rapportCard";

function RapportGAV({ reports }) {
    return (
        <div className={"citizen-fiche__down__right"}>
            <h3>Rapports de garde à vue</h3>
            <div className={"container-civil-card"}>
                {reports.map((dispatch, index) => (
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
                    <img style={{ width: "15px" }} src="/assets/icon/plus.svg" alt="Permis Sniper" />
                </div>
            </div>
        </div>
    );
}

export default RapportGAV;
