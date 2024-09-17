import React from 'react';
import './CarsPanel.css';
import OurCarItem from './components/OurCarItem/OurCarItem';


const CarsPanel = ({car}) => {
    return (
            <OurCarItem booking={car}/>
    )
};

export default CarsPanel;