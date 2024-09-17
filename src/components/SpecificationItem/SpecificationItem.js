import React from 'react';
import './SpecificationItem.css'

const SpecificationItem = ({title, value}) => {
    return (
        <div className='specification-item'>
                    <p>{title}</p>
                    <span>{value}</span>
        </div>
    )
};

export default SpecificationItem;