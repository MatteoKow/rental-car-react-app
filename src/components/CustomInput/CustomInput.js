import React from 'react';
import './CustomInput.css';

const CustomInput = ({title, value, type, handleOnChange, active=true}) => {
    return (
        <div  className='custom-input'>
            <label htmlFor={title} >{title}</label>
            <input id={title} onChange={handleOnChange} type={type} value={value} disabled={!active}/>
        </div>

    )
};

export default CustomInput;

