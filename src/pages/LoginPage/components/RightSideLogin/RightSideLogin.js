import React from 'react';
import './RightSideLogin.css';

const RightSideLogin = ({children}) => {
    return (
        <section className='right-side-login'>
            {children}
        </section>
    )
};

export default RightSideLogin;