import React from 'react';

function SelectOption({ name, id, options, selectedValue, onChange  }) {


    return (
        <select name={name} id={id} onChange={onChange}> {/* Attachez onChange à l'élément select */}
            {options.map((option, index) => (
                <option value={option.value} key={index} selected={option.value === selectedValue}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default SelectOption;
