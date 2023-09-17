import React from 'react';

function OfficerList({ officers }) {
    return (
        <div className="officer__list__table">
            {officers.map((officer, index) => (
                <span className="officer" data-id-officer={officer.officierID} key={index}>
                    <span className="officer__name">{officer.name}</span>
                    {officer.officierID && <span className="officer__delete" data-delete-id={officer.officierID}></span>}
                </span>
            ))}
            <div className="add__officer openModal" data-modal="add__officer__mdt"></div>
        </div>
    );
}

export default OfficerList;
