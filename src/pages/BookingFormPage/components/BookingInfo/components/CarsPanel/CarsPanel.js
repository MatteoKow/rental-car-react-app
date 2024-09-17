import React from 'react';
import './CarsPanel.css';
import OurCarItem from './components/OurCarItem/OurCarItem';


const CarsPanel = (props) => {
    return (
            <OurCarItem key={props._id} {...props}/>
    )
};

export default CarsPanel;