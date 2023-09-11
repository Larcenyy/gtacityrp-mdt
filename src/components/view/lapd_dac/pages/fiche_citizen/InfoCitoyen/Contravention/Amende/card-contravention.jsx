import React from 'react';

function CardContravention({ title, date, modalDelete, isGood}) {
    const textClass = isGood ? 'textGood' : 'textBad';
    const iconSrc = isGood ? '/assets/icon/valid.svg' : '/assets/icon/invalide.svg';
    const paymentStatus = isGood ? 'Payé' : 'Impayé';

    return (
        <div className={"card-contrat"}>
            <div className={"card-contrat__info"}>
                <div className={"card-contrat__info__img"}>
                    <img style={{ width: "20px" }} src="/assets/icon/radarScan.svg" alt="Photo" />
                </div>
                <div>
                    <h4>{title}</h4>
                    <p>{date} -
                        <span className={textClass}>
                             <img style={{ width: "10px" }} src={iconSrc} alt="Statut" />
                            {paymentStatus}
                        </span>
                    </p>
                </div>
                <div>
                    <hr/>
                </div>
                <div>
                    <span data-modal={modalDelete} className={"openModal"}>
                         <img style={{ width: "15px" }} src="/assets/icon/trashCall.png" alt="Supprimer" />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CardContravention;