import React from 'react';
import './CarSepecificationItem.css';
import SpecificationIcon from '../../../../components/SpecificationIcon/SpecificationIcon';

const CarSpecificationItem = ({icon, title, content}) => {
    return (
        <div className='wrap-icon'>
            {/* <img src={icon} alt="" /> */}
            <SpecificationIcon icon={icon} alt={""} />
            <div className='title-spec'>{title}</div>
            <div className='content-spec'>{content}</div>
        </div>
    )
};

export default CarSpecificationItem;