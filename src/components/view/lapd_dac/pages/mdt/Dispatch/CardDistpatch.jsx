import React from 'react';

function CardDispatch({ badgeId, badgeCode, title, time, location, modalVerif, modalDelete, modalLocalisation }) {
    return (
        <div className={'cardDispatch'}>
            <div className={'cardDispatch__left'}>
                <div className={'cardDispatch__left__top'}>
                    <div className={"cardDispatch__left__top__code"}>
                        <span className={"badgeId"}>#{badgeId}</span>
                        <span className={"badgeCode"}>{badgeCode}</span>
                        <h5>{title}</h5>
                    </div>
                    <div className={"cardDispatch__left__top__info"}>
                        <p><img style={{width: "12px"}} src="/assets/icon/clock.svg" alt="Heures"/>{time}</p>
                        <p><img style={{width: "12px"}} src="/assets/icon/localisation.svg" alt="Localisation"/>{location}</p>
                    </div>
                    <span data-modal={modalVerif} className="claim openModal">Prendre l'appel</span>
                </div>
            </div>
            <div className={'cardDispatch__right'}>
                <div className={"cardDispatch__right__icon"}>
                    <span data-modal={modalDelete} className={"openModal"}>
                       <img style={{width: "17px", fill: "#ED1B22", cursor: "pointer"}} src="/assets/icon/trashCall.png" alt="Supprimer"/>
                    </span>
                    <span data-modal={modalLocalisation} className={"openModal"}>
                        <img style={{width: "12px", cursor: "pointer"}} src="/assets/icon/localisation.svg" alt="Localisation"/>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CardDispatch;
