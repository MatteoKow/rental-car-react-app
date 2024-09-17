import React, { useState } from 'react';
import './FilterCheckboxItem.css';

const FilterCheckboxItem = ({option, handleSelected}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckbox = () => {
        setIsChecked(!isChecked);
        handleSelected(option, !isChecked);
      };
    return (
        // <label htmlFor={option}>
        //     <input type="checkbox" id={option} onChange={handleCheckbox} checked={isChecked}/>
            
        //     <span className='checkbox-label'>{option}</span>
        // </label>
        <div className={isChecked ? 'active-checkbox' : 'checkbox'}onClick={handleCheckbox}>{option}</div>
    )
};

export default FilterCheckboxItem;