import React from 'react';

function ListeCitoyen(modalDelete) {
    return (
        <div className={"citizen-list"}>
            <div className={"search-container"}>
                <input className="search-bar" type="text" placeholder={"Rechercher un citoyen "}/>
                <div className={"search-icon"}></div>
            </div>
            <div className={'card-container'}>
                <div className="card-citizen">
                    <div className={"card-citizen__info"}>
                        <img style={{ width: "30px" }} src="/assets/icon/avatarCitizen.png" alt="Citoyen" />
                        <div className={"card-citizen__name"}>
                            <h4>tt</h4>
                            <p>Date de naissance</p>
                        </div>
                    </div>
                    <hr/>
                    <span data-modal={modalDelete} className="openModal">
                        <img style={{ width: "18px" }} src="/assets/icon/trashCall.png" alt="Supprimer" />
                    </span>
                </div>
            </div>
            <div className={"newFiche"}>
                <span>+ Créer une fiche citoyen</span>
            </div>
        </div>

    );
}

export default ListeCitoyen;
