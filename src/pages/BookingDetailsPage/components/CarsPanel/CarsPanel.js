import React from 'react';
import './CarsPanel.css';
import OurCarItem from './components/OurCarItem/OurCarItem';


const CarsPanel = ({booking}) => {
    return (
            <OurCarItem key={booking._id} booking={booking}/>
    )
};

export default CarsPanel;