import React from "react";
import {officierData} from "../mdt/Tables/officierData";
import {onlineData} from "./onlineData";

function LapdAgentList() {
    const officersOnline = onlineData.map((onlineOfficer) => {
        // Recherchez l'officier correspondant en utilisant l'officierID
        const matchingOfficer = officierData.find((officer) => officer.officierID === onlineOfficer.officierID);

        if (matchingOfficer) {
            return (
                <div className="officer__card" key={matchingOfficer.officierID}>
                    <div className="officer__profile"></div>
                    <div className="officer__informations">
                        <div className="name">
                            {matchingOfficer.name}
                        </div>
                        <div className="matricule">
                            {matchingOfficer.matricule}
                        </div>
                    </div>
                    <img style={{ width: "30px"}} src={`/assets/images/icon/ranks/${matchingOfficer.rank}.png`} alt="Rank" />
                </div>
            );
        }

        return null; // Retournez null si aucune correspondance n'est trouvée
    });

    return (
        <>
            <div className="officers__list content-item">
                <div className="title-content">
                    <div className="icon icon__officers__list-title"></div>
                    Officiers en ligne
                </div>
                <div className="content__officers__list">
                    {officersOnline}
                </div>
            </div>
        </>
    );
}
export default LapdAgentList;
