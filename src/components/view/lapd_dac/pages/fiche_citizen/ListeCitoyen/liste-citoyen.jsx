import React from 'react';
import CardCitoyen from "./CardCitoyen/card-citoyen";
import {listeCitoyenData} from "./listeCitoyenData";
function ListeCitoyen() {
    return (
        <div className={"citizen-list"}>
            <div className={"search-container"}>
                <input className="search-bar" type="text" placeholder={"Rechercher un citoyen "}/>
                <div className={"search-icon"}></div>
            </div>
            <div className={'card-container'}>
                {listeCitoyenData.map((dispatch, index) => (
                    <CardCitoyen
                        key={index}
                        title={dispatch.title}
                        dateBirthday={dispatch.dateBirthday}
                        modalDelete={dispatch.modalDelete}
                    />
                ))}
            </div>
            <div className={"newFiche"}>
                <span data-modal="add_fiche_citizen" className={"openModal"}>+ Créer une fiche citoyen</span>
            </div>
        </div>
    );
}

export default ListeCitoyen;
