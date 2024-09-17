import React from 'react';
import UserNavigation from '../../layouts/UserNavigation/UserNavigation';
import UserContent from '../../layouts/UserContent/UserContent';
import './UserPage.css'
import UITemplate from '../../templates/UITemplate/UITemplate';


const UserPage = ({setIsLoggedIn}) => {
    return (
        <section className='userpage-main'>
                <UserNavigation setIsLoggedIn={setIsLoggedIn}/>
                <UITemplate>
                    <UserContent />
                </UITemplate>
        </section>
    )
};

export default UserPage;