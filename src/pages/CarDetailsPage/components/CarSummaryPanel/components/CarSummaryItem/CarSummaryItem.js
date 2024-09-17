import React from 'react';
import './CarSummaryItem.css';
import Switch from "react-switch";

const CarSummaryItem = ({handleOnChange, checked, title, price}) => {
    return (
        <label className='extras-row'>
            <div className='label-left'>
                <Switch onChange={handleOnChange} checked={checked} onColor="#000" height={22} width={45}/>
                <span>{title}</span>
            </div>
            <span>{price}</span>
        </label>
    )
};

export default CarSummaryItem;