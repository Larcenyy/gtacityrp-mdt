import React from 'react';
function CardCitoyen({ title, dateBirthday, modalDelete, isActive, onClick, citizenId }) {
    const cardClassName = `card-citizen ${isActive ? 'cardActive' : ''}`;

    return (
        <div className={cardClassName} onClick={onClick} data-id={citizenId}>
            <div className={"card-citizen__info"}>
                <img style={{ width: "30px" }} src="/assets/icon/avatarCitizen.png" alt="Citoyen" />
                <div className={"card-citizen__name"}>
                    <h4>{title}</h4>
                    <p>{dateBirthday} </p>
                </div>
            </div>
            <hr/>
            <span data-modal={modalDelete} className="openModal">
                <img style={{ width: "18px" }} src="/assets/icon/trashCall.png" alt="Supprimer" />
            </span>
        </div>
    );
}

export default CardCitoyen;