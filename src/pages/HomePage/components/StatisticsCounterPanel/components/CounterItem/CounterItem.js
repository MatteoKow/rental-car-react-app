import React from 'react';
import './CounterItem.css'

const CounterItem = ({quantity, counterName}) => {
    return (
        <div className='counter-item'>
            <div className='quantity'>{quantity}</div>
            <div className='counter-name'>{counterName}</div>
        </div>
    )
};

export default CounterItem;