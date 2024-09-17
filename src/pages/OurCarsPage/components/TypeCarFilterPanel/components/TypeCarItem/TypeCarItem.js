import React from 'react';
import './TypeCarItem.css';

const TypeCarItem = ({title, handleTypeCar, isSelected}) => {
    const handleClick = () => {
        handleTypeCar(title);
      };

    return (
        <div onClick={handleClick} className={`type-car-item ${isSelected ? 'selected' : ''}`} >{title}</div>
    )
};

export default TypeCarItem; 