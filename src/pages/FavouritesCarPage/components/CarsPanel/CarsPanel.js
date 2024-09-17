import React from 'react';
import './CarsPanel.css';
import OurCarItem from './components/OurCarItem/OurCarItem';



const CarsPanel = ({allCars, favourites, addFavourites, removeFavourites}) => {
    const cars = allCars.map((car) => ( <OurCarItem key={car._id} car={car} addFavourites={addFavourites} removeFavourites={removeFavourites}favourites={favourites}/>))
    return (
        <section className='cars-panel-fav'>
            {cars}
        </section>
    )
};

export default CarsPanel;