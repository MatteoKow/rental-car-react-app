import React from 'react';
import './SmallProfilePicture.css'

const SmallProfilePicture = ({img}) => {
    return (
        <div className='small-profile-picture'>
            <img src={img} alt="" />
        </div>
    )
};

export default SmallProfilePicture;