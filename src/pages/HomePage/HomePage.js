import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import ReviewsPanel from './components/ReviewsPanel/ReviewsPanel';
import request from '../../helpers/request';
import CarFinder from '../../components/CarFinder/CarFinder';

const HomePage = () => {
    const [reviews, setReviews] = useState([]);
    const getReviews = () => {
        request.get('/bookings/last-reviews')
        .then(res => {
            setReviews(res.data);
        })
        .catch(e => {
        });
    }
    useEffect(getReviews, []);
    return (
        <>
            <Banner />
            <CarFinder/>
            <ReviewsPanel reviews={reviews} />
        </>
    )
};

export default HomePage;