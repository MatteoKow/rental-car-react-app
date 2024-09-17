import React from 'react';
import './LeftSideLogin.css';
// import LoginBg from '../../../../img/login-bg.jpeg';
import LoginBg from '../../../../img/login.png';


const LeftSideLogin = () => {
    return (
        <section className='left-side-login'>
            <img src={LoginBg} alt="" />
        </section>
    )
};

export default LeftSideLogin;