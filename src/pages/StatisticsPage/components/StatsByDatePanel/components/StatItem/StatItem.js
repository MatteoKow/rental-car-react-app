import React from 'react';
import './StatItem.css';

const StatItem = ({value, title, icon: IconComponent, color}) => {

    const itemStyle = {
        backgroundColor: color || '#000', // Domyślny kolor: czarny
      };
    return (
        <div className='stats-item' style={itemStyle}> 
            <div className='stats-left'>
                <IconComponent/>
            </div>
            <div className='stats-right'>
                <span>{title}</span> 
                <span>{value}</span>
            </div>
        </div>
    );
};

export default StatItem;