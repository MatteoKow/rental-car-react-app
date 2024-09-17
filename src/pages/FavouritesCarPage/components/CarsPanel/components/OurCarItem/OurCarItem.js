import React, { useState } from 'react';
import './OurCarItem.css';
import SpecificationItem from '../../../../../../components/SpecificationItem/SpecificationItem';
import { MdFavoriteBorder, MdOutlineFavorite} from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";


const OurCarItem = ({car, removeFavourites, addFavourites, favourites}) => {
    
    const {_id, image, ac, title, doors, fuel, transmission, makeImage} = car;

    const isFavorite = favourites && favourites.includes(_id);

    return (
        <div className='our-car-item'>
            <div className='img-section'>
                <img src={image[0]} alt="" />
                {isFavorite ? (
                    <MdOutlineFavorite
                        onClick={() => removeFavourites(_id)}
                        className='fav-icon-active'
                    />
                ) : (
                    <IoIosHeartEmpty
                        onClick={() => addFavourites(_id)}
                        className='fav-icon'
                    />
                )}
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