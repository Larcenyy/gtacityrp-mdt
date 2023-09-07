import React from 'react';
import { unitRanks, unitTypes, unitStatuses } from './tableData';
import SelectOption from './SelectOption';
import OfficerList from './OfficerList';
import VehicleList from './VehicleList';

function TableRow({ data }) {
    return (
        <tr>
            <td>
                <SelectOption name="unit_rank" id="unit_rank" options={unitRanks} selectedValue={data.unitRank} />
            </td>
            <td>
                <SelectOption name="unit_type" id="unit_type" options={unitTypes} selectedValue={data.unitType} />
            </td>
            <td>
                <OfficerList officers={data.officers} />
            </td>
            <td>
                <VehicleList vehicles={data.vehicles} />
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
    );
}

export default TableRow;
