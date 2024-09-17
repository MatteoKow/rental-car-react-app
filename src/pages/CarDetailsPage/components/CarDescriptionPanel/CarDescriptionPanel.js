import React from 'react';
import './CarDescriptionPanel.css';

const CarDescriptionPanel = ({description}) => {
    return (
        <section className='description-panel'>
            <div className='title-description'>Opis</div>
            <div className='content-description'>
                <p>{description}</p>
            </div>
        </section>
    )
};

export default CarDescriptionPanel;