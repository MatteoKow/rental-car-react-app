import React from 'react';
import './CarMainPanel.css';
import ImageGallery from "react-image-gallery";
import CarSummaryPanel from '../CarSummaryPanel/CarSummaryPanel';

const CarMainPanel = (props) => {
    return (
        <section className='main-container'>
            <div className='main'>
                <div className='wrap-title'>
                    <div className='title-car'>{props.title}</div>
                    <div className='price-per-day'>Cena: {props.price} zł / 24h</div>
                </div>
                <ImageGallery items={props.images} showThumbnails={true} />
            </div>
        </section>
    )
};

export default CarMainPanel;