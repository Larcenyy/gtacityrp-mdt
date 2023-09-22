import React, {useState} from 'react';
import SelectOption from "../../mdt/Tables/SelectOption";
import { rapportType } from "../rowsData";

function RapportType({ data, onSelect }) { // Ajoutez onSelect en tant que prop

    const [selectedValue, setSelectedValue] = useState("");


    const handleSelectChange = (event) => {
        const newValue = event.target.value;
        setSelectedValue(newValue);
        onSelect(newValue); // Appeler la fonction onSelect pour transmettre la valeur au parent
    };

    return (
        <>
            <SelectOption
                name="typeRapport"
                id="typeRapport"
                options={rapportType}
                selectedValue={selectedValue}
                onChange={handleSelectChange} // Utilisez onChange pour déclencher l'événement onChange
            />
        </>
    );
}

export default RapportType;
