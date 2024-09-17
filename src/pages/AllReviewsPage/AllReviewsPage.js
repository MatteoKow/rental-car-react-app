import React, { useEffect, useState } from 'react';
import './AllReviewsPage.css';
import request from '../../helpers/request';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

import ReviewPanel from './components/ReviewPanel/ReviewPanel';
const AllReviewsPage = () => {

    const [reviews, setReviews] = useState();
    const [text, setText] = useState();
    const [activeButton, setActiveButton] = useState('reviews');



    const getReviews = () => {
        const token = Cookies.get('access_token');
        request.get('/bookings/reviews',{
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            setReviews(res.data);
        })
        .catch(e => {
            const { code, message } = e.response.data;
            if (code === 400) {
                alert(message);
            }
        });
    }
    const getBlockedReviews = () => {
        const token = Cookies.get('access_token');
        request.get('/bookings/blocked-reviews',{
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            setReviews(res.data);
        })
        .catch(e => {
            const { code, message } = e.response.data;
            if (code === 400) {
                alert(message);
            }
        });
    }
    const blockReview = (e, bookingId) => {
        e.preventDefault();
        const token = Cookies.get('access_token');
        const decodedToken = jwt_decode(token);
        const id = decodedToken.id;
        request.patch(`/bookings/block-review/${id}`, {
            bookingId, 
        },{
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            getReviews();

        })
        .catch(e => {
            const { code, message} = e.response.data;
            if (code === 400) {
                alert(message);
            }
        })
    }
    const activateReview = (e, bookingId) => {
        e.preventDefault();
        const token = Cookies.get('access_token');
        const decodedToken = jwt_decode(token);
        const id = decodedToken.id;
        request.patch(`/bookings/activate-review/${id}`, {
            bookingId, 
        },{
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            getBlockedReviews();

        })
        .catch(e => {
            const { code, message} = e.response.data;
            if (code === 400) {
                alert(message);
            }
        })
    }

    useEffect(getReviews, []);

    const reviewsList = reviews && reviews.map(review => <ReviewPanel key={review._id} {...review}  activeButton={activeButton} blockReview={blockReview} activateReview={activateReview}/>)

    return (
        <section className='reviews-page'>
            <div className='title'>Opinie</div>
             <section className='filter-bar-review'>
              <button
                        onClick={() => {
                            getReviews();
                            setActiveButton('reviews');
                        }}
                        className={`review-button ${activeButton === 'reviews' ? 'active' : ''}`}
                    >
                        Opinie
                    </button>
                    <button
                        onClick={() => {
                            getBlockedReviews();
                            setActiveButton('blocked');
                        }}
                        className={`review-button ${activeButton === 'blocked' ? 'active' : ''}`}
                    >
                        Zablokowane
                    </button>
              </section>
            {reviewsList}
        </section>

    );
};

export default AllReviewsPage;