import React from 'react';
import { AiFillCheckCircle } from "react-icons/ai";
import './ProfileBarPanel.css';
import DefaultUser from '../../../../../../img/deafult-user.jpeg';



const ProfileBarPanel = (props) => {

    const {firstName, lastName} = props;
    return (
            <section className='profile-bar-panel'>
                <section className='left'>
                    <div className='profile-image'>
                        <img src={DefaultUser} alt="" />
                    </div>
                    <div className='info-part'>
                        <div className='profile-name'>{firstName} {lastName}  <AiFillCheckCircle color={'#01BEFE'} /> </div>
                    </div>
                </section>
            </section>
    )
};

export default ProfileBarPanel;