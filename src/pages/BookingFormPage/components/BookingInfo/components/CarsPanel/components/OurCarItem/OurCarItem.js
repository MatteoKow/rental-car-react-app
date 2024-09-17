import React from 'react';
import './OurCarItem.css';
import SpecificationItem from '../../../../../../../../components/SpecificationItem/SpecificationItem';

const OurCarItem = ({car}) => {

    const {image, ac, title, doors, fuel, transmission, makeImage} = car ? car[0] : {};
    return (
        <div className='our-car-item-pre-booking'>
            <div className='img-section'>
                <img src={image?.[0] ?? ''} alt="" />
            </div>
            <div className='make-info-section'>
                <img src={makeImage} alt="" />
                <p>{title}</p>
            </div>
            <div className='specification-info-section'>
                <SpecificationItem title={"Drzwi"} value={doors}/>
                <SpecificationItem title={"AC"} value={ac}/>
                <SpecificationItem title={"Skrzynia biegów"} value={transmission}/>
                <SpecificationItem title={"Paliwo"} value={fuel}/>
            </div>
        </div>
    )
};

export default OurCarItem;