import React from 'react';
import RapportCard from "../RapportArrestation/rapportCard";
import {openModal} from "../../../../../../../dist/assets/modalToogle";
import {Link} from "react-router-dom";

function RapportGAV({ reports }) {
    return (
        <div className={"citizen-fiche__down__right"}>
            <h3>Rapports de garde à vue</h3>
            <div className={"container-civil-card"}>
                {reports.map((dispatch, index) => (
                    <RapportCard
                        key={index}
                        title={dispatch.title}
                        date={dispatch.date}
                        modalDelete={dispatch.modalDelete}
                        modalEdit={dispatch.modalEdit}
                        modalSee={dispatch.modalSee}
                    />
                ))}
                <Link to="/page/rapport-gav" className={"add-card"}>
                    <img style={{ width: "15px" }} src="/assets/icon/plus.svg" alt={"Ajouter"} />
                </Link>
            </div>
        </div>
    );
}

export default RapportGAV;
