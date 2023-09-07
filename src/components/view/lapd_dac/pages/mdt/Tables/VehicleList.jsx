import React from 'react';

function VehicleList({ vehicles }) {
    return (
        <div className="vehicle__list__table">
            {vehicles.map((vehicle, index) => (
                <span className="vehicle" data-id-vehicle={vehicle.id} key={index}>
          <span className="vehicle__name">{vehicle.name}</span>
                    {vehicle.id && <span className="vehicle__delete" data-delete-id={vehicle.id}></span>}
        </span>
            ))}
            <div className="add__vehicle openModal" data-modal="add__vehicle__mdt"></div>
        </div>
    );
}

export default VehicleList;
