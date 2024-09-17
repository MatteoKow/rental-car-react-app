import React from 'react';
import './ReviewsPanel.css';
import ReviewItem from './components/ReviewItem/ReviewItem';
import ProfilePicture from '../../../../img/deafult-user.jpeg';
const ReviewsPanel = ({reviews}) => {
    const reviewsList =  reviews.map(review => <ReviewItem key={review.firstName} review={review} img={ProfilePicture} />)
    return (
        <section className='reviews-panel'>
            <p>Ostatnie opinie</p>
            <div className='reviews-items'>
                {reviewsList} 
            </div>
        </section>
    )
};

export default ReviewsPanel;