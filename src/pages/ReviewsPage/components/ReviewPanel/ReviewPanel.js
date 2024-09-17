import React, { useState } from 'react';
import { GrEdit, GrTrash, GrClose } from "react-icons/gr";


import './ReviewPanel.css'

const ReviewPanel = (props) => {
    const {_id, makeImage, title, carImage, addReview, deleteReview, activeButton, updateReview} = props;
    const [text, setText] = useState(props.text);
    const [isDisabled, setIsDisabled] = useState(true);
    const handleTextArea = (e) => setText(e.target.value);
    const handleEdit = () => setIsDisabled(!isDisabled)

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
                        {activeButton === 'added' && ( 
                            <>
                                {!isDisabled ? <GrClose onClick={handleEdit} className="review-icon"/> : <GrEdit onClick={handleEdit} className="review-icon"/>}
                                <GrTrash onClick={(e) => deleteReview(e, _id)} className="review-icon"/>
                            </>
                         )}
                    </div>
                </div>

                <div className='info-bottom-review'>
                    {activeButton === "added" ? (
                        <>
                            <textarea disabled={isDisabled} onChange={handleTextArea} value={text} cols="30" rows="10" placeholder='Napisz opinie...'></textarea>
                            {!isDisabled ? <button onClick={(e)=> { updateReview(e, _id, text); setIsDisabled(true) }} type='submit' className='add-review'>Aktualizuj</button> : null}
                        </>
                    )
                        :
                    (
                        <>
                            <textarea onChange={handleTextArea} value={text} cols="30" rows="10" placeholder='Napisz opinie...'></textarea>
                            <button onClick={(e)=> addReview(e, _id, text)} type='submit' className='add-review'>Dodaj</button>
                        </>

                    )
                    }
                </div>

            </div>
        </form>
    )
};

export default ReviewPanel;