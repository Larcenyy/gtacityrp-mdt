import React, {useState} from 'react';
import CardDispatch from "./CardDistpatch";
import {dispatchData} from "./dispatchData";

function CardDispatchContainer() {
    const [dispatches, setDispatches] = useState(dispatchData);

    // Fonction de suppression
    const handleDeleteDispatch = (badgeId) => {
        // Filtrer les dispatches pour exclure celui avec le badgeId donné
        const updatedDispatches = dispatches.filter(dispatch => dispatch.badgeId !== badgeId);
        setDispatches(updatedDispatches);
    };

    return (
        <div className={"containerCard"}>
            {dispatches.map((dispatch, index) => (
                <CardDispatch
                    key={index}
                    badgeId={dispatch.badgeId}
                    badgeCode={dispatch.badgeCode}
                    title={dispatch.title}
                    time={dispatch.time}
                    location={dispatch.location}
                    modalVerif={dispatch.modalVerif}
                    modalDelete={dispatch.modalDelete}
                    modalLocalisation={dispatch.modalLocalisation}
                    onDelete={() => handleDeleteDispatch(dispatch.badgeId)} // Passer la fonction de suppression en tant que prop
                />
            ))}
        </div>
    );
}

export default CardDispatchContainer;
