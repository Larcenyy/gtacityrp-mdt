import React from 'react';

function VehicleList({ vehicles }) {
    return (
        <div className="officer__list__table">
            {vehicles.map((vehicle, index) => (
                <span className="officer" data-id-officer={vehicle.carID} key={index}>
                    <span className="officer__name">{vehicle.name}</span>
                    {vehicle.carID && <span className="officer__delete" data-delete-id={vehicle.carID}></span>}
                </span>
            ))}
            <div className="add__vehicle openModal" data-modal="add__vehicle__mdt"></div>
        </div>
    );
}

export default VehicleList;

