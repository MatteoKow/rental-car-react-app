import React from 'react';
import './SpecificationIcon.css'

const SpecificationIcon = ({icon, alt}) => {
    return (
        <>
            <img className='spec-icon' src={icon} alt={alt} />
        </>
    )
};

export default SpecificationIcon;