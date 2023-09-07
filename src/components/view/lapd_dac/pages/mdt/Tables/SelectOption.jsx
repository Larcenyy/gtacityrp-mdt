import React from 'react';

function SelectOption({ name, id, options, selectedValue }) {
    return (
        <select name={name} id={id}>
            {options.map((option, index) => (
                <option value={option.value} key={index} selected={option.value === selectedValue}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default SelectOption;
