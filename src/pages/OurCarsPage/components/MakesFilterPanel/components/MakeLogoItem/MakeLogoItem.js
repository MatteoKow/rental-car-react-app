import React from 'react';
import './MakeLogoItem.css';

const MakeLogoItem = ({logo, name, handleMakeCar, isSelected}) => {
    const handleClick = () => {
        handleMakeCar(name);
      };

    return (
        <div className='make-logo-item'>
            <div  onClick={handleClick} className={`make-logo ${isSelected ? 'selected' : ''}`}>
                <img src={logo} alt="" />
            </div>
            <p>{name}</p>
        </div>
    )
};

export default MakeLogoItem; 