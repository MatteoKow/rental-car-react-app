import React, { useEffect, useState } from 'react';
import { GrEdit, GrTrash, GrClose } from "react-icons/gr";
import { MdOutlineAddCircleOutline } from "react-icons/md";



import './ReviewPanel.css'

const ReviewPanel = (props) => {
    const {_id, makeImage, title, carImage, blockReview, activeButton, review, activateReview} = props;
    return (
        <form className='container'>
            <div className='image'>
                <img src={carImage[0]} alt="car" />
            </div>
            <div className='info'>
                <div className='info-top-review'>
                    <div className='left'>
                        <img src={makeImage} alt={makeImage} />
                        <div className='title-car'>{title}</div>
                        <span>ID: {_id}</span>
                    </div> 
                    <div className='right'>
                        {activeButton === "reviews" ? 
                            <GrTrash onClick={(e) => blockReview(e, _id)} className="review-icon"/>
                        :
                            <MdOutlineAddCircleOutline onClick={(e) => activateReview(e, _id)} className="review-icon"/>
                        }

                    </div>
                </div>

                <div className='info-bottom-review'>
                            <textarea disabled={true} value={review.text} cols="30" rows="10" placeholder='Napisz opinie...'></textarea>
                </div>

            </div>
        </form>
    )
};

export default ReviewPanel;