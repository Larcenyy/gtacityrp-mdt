import React from 'react';
import CardDispatch from "./CardDistpatch";
import {dispatchData} from "./dispatchData";


function CardDispatchContainer() {
    return (
        <div className={"containerCard"}>
            {dispatchData.map((dispatch, index) => (
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
                />
            ))}
        </div>
    );
}

export default CardDispatchContainer;
