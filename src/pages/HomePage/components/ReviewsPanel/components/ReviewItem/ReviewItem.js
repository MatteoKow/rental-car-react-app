import React from 'react';
import './ReviewItem.css';
import SmallProfilePicture from '../../../../../../components/SmallProfilePicture/SmallProfilePicture';
import { parseISO, format} from 'date-fns';


const ReviewItem = ({img, review}) => {

    const bookingDateFormatted = review.bookingDate ? format(parseISO(review.bookingDate), 'dd-MM-yyyy') : null;

    return (
        <>
            <div className='review-item'>
                <div className='review-top'>
                    <SmallProfilePicture img={img}/>
                    <div className='author-name'>{review.firstName} {review.lastName[0]}.</div>
                </div>
                <div className='review-bottom'>
                    <span className='text-review'>
                        {review.review.text}
                    </span>
                    <div className='date-review'>{bookingDateFormatted}</div>
                </div>
                
                <span className='tiangle-review'></span>
            </div>
            
        </>
        
        
    )
};

export default ReviewItem;