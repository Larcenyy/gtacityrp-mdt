import React from 'react';
import {unitRanks, unitTypes, unitStatuses} from './tableData';
import SelectOption from './SelectOption';
import OfficerList from './OfficerList';
import VehicleList from './VehicleList';
import {officierData} from "./officierData";
import {vehicleData} from "./vehicleData";
import ModalManager from "../../../Modals/ModalMap";

function TableRow({ data }) {
    const officers = officierData.filter((officer) => data.officers.some((o) => o.officierID === officer.officierID));
    const vehicles = vehicleData.filter((vehicle) => data.vehicles.some((v) => v.carID === vehicle.carID));

    const handleAddOfficer = () => {
        // Récupérer les données des "officer__card selected"
        const selectedOfficers = document.querySelectorAll('.officer__card.selected');
        const newOfficersData = Array.from(selectedOfficers).map((selectedOfficer) => {
            const officerId = selectedOfficer.getAttribute('data-id');
        });
    };

    return (
        <>
            <tr id={"mdtTable"}>
                <td>
                    <SelectOption name="unit_rank" id="unit_rank" options={unitRanks} selectedValue={data.unitRank} />
                </td>
                <td>
                    <SelectOption name="unit_type" id="unit_type" options={unitTypes} selectedValue={data.unitType} />
                </td>
                <td>
                    <OfficerList officers={officers} />
                </td>
                <td>
                    <VehicleList vehicles={vehicles} />
                </td>
                <td>
                    {data.location}
                    <span className="icon__localisation__mdt openModal" data-modal="view__location__patrouille"></span>
                </td>
                <td>
                <span className="dispo__status">
                  <span className="dispo__point"></span>
                  <span className="dispo__text">{data.availability}</span>
                </span>
                </td>
                <td>
                    <SelectOption name="unit_status" id="unit_status" options={unitStatuses} selectedValue={data.status} />
                </td>
            </tr>

            <ModalManager method={() => handleAddOfficer()} />
        </>
    );
}

export default TableRow;
