import React from 'react';
function RapportGAVCard({title, date, modalDelete, modalSee, modalEdit}) {
    return (
        <div className={`civil-card`}>
            <div className={"civil-card__info"}>
                <div className={"civil-card__info__left"}>
                    <div className={"civil-card__info__left__img"}>
                        <img style={{ width: "15px" }} src="/assets/icon/fiche.png" alt="Fiche" />
                    </div>
                    <div>
                        <h4>{title}</h4>
                        <p>{date}</p>
                    </div>
                </div>
                <div>
                    <hr/>
                </div>
                <ul>
                    <li>
                        <span data-modal={modalSee} className={'openModal'}><img style={{ width: "15px" }} src="/assets/icon/eyes.svg" alt="Voir" /></span>
                    </li>
                    <li>
                        <span data-modal={modalEdit} className={'openModal'}><img style={{ width: "15px" }} src="/assets/icon/edit.svg" alt="Editer" /></span>
                    </li>
                    <li>
                        <span data-modal={modalDelete} className={'openModal'}><img style={{ width: "15px" }} src="/assets/icon/trashCall.png" alt="Supprimer" /></span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default RapportGAVCard;
