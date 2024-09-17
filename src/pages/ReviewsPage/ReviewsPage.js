import React, { useEffect, useState } from 'react';
import './ReviewsPage.css';
import ReviewPanel from './components/ReviewPanel/ReviewPanel';
import request from '../../helpers/request';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';


const ReviewsPage = () => {

    const [bookings, setBookings] = useState();
    const [text, setText] = useState();
    const [activeButton, setActiveButton] = useState('new');

    const getCompletedBookings = () => {
        const token = Cookies.get('access_token');
        if(token) {
            const decodedToken = jwt_decode(token);
            const id = decodedToken.id;
        
            request.get(`/bookings/user/completed/review/${id}`,{
                headers: {
                    'Authorization': token
                }
            })
            .then(res => {
                setBookings(res.data);
            })
            .catch(e => {
                const { code, message} = e.response.data;
                if (code === 400) {
                    alert(message);
                }
            })
        }

    }

    const getBookingsWithReview = () => {
        const token = Cookies.get('access_token');

        if(token){
            const decodedToken = jwt_decode(token);
            const id = decodedToken.id;
        
            request.get(`/bookings/user/review/${id}`,{
                headers: {
                    'Authorization': token
                }
            })
            .then(res => {
                setBookings(res.data);
                
            })
            .catch(e => {
                const { code, message} = e.response.data;
                if (code === 400) {
                    alert(message);
                }
            })
        }

    }

    const addReview = (e, bookingId, text) => {
        e.preventDefault();
        const token = Cookies.get('access_token');
        const decodedToken = jwt_decode(token);
        const id = decodedToken.id;
    
        request.patch(`/bookings/add-review/${id}`, {
            bookingId, 
            text
        },{
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            getCompletedBookings();
        })
        .catch(e => {
            const { code, message} = e.response.data;
            if (code === 400) {
                alert(message);
            }
        })
    }

    const updateReview = (e, bookingId, text) => {
        e.preventDefault();
        const token = Cookies.get('access_token');
        const decodedToken = jwt_decode(token);
        const id = decodedToken.id;
    
        request.patch(`/bookings/add-review/${id}`, {
            bookingId, 
            text
        },{
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            getBookingsWithReview();
            // setIsDisabled(true);
        })
        .catch(e => {
            const { code, message} = e.response.data;
            if (code === 400) {
                alert(message);
            }
        })
    }

    const deleteReview = (e, bookingId) => {
        e.preventDefault();
        const token = Cookies.get('access_token');
        const decodedToken = jwt_decode(token);
        const id = decodedToken.id;
    
        request.patch(`/bookings/delete-review/${id}`, {
            bookingId, 
        },{
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            getBookingsWithReview();
            setText('');

        })
        .catch(e => {
            const { code, message} = e.response.data;
            if (code === 400) {
                alert(message);
            }
        })
    } 


    useEffect(() => {
        if (activeButton === 'new') {
            getCompletedBookings();
        } else if (activeButton === 'added') {
            getBookingsWithReview();
        }
    }, [activeButton]);

    const reviewsList = bookings && bookings.map(review => <ReviewPanel key={review._id} text={review.review.text !== undefined ? review.review.text : text || ''} {...review} activeButton={activeButton}  addReview={addReview} deleteReview={deleteReview} updateReview={updateReview} />);

    return (
        <section className='add-review-page'>
            <div className='title'>Opinie</div>

            <section className='filter-bar-review'>
              <button
                        onClick={() => {
                            getCompletedBookings();
                            setActiveButton('new');
                        }}
                        className={`review-button ${activeButton === 'new' ? 'active' : ''}`}
                    >
                        Nowe
                    </button>
                    <button
                        onClick={() => {
                            getBookingsWithReview();
                            setActiveButton('added');
                        }}
                        className={`review-button ${activeButton === 'added' ? 'active' : ''}`}
                    >
                        Dodane
                    </button>
              </section>
                {reviewsList && reviewsList.length > 0 ? reviewsList : <div className='no-review-banner'>Brak opinii</div>}
            
        </section>
    );
};

export default ReviewsPage;