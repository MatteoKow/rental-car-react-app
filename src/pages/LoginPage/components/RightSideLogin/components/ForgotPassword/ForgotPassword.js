import React from 'react';
import './ForgotPassword.css';

const ForgotPassword = ({handleEmailToReset, emailToReset, sendRequestToChangePassword}) => {
    return(
        <form className='forgot-panel'>
            <span>Resetuj hasło</span>
            <input type="email" value={emailToReset} onChange={handleEmailToReset} placeholder='Email'/>
            <button onClick={sendRequestToChangePassword}>Wyślij</button>
        </form>
    )
}

export default ForgotPassword;