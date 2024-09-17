import React, { useState } from 'react';
import './LoginPanel.css';


const LoginPanel = ({handleOnChangeLogin, handleOnChangePassword, handleRegisterActive, handleForgotActive, sendLoginForm, login, password}) => {

    const [isActive, setIsActive] = useState('');

    const handleOnFocus = (fieldName) => setIsActive(fieldName);

    return(
                <form className="login-panel">
                    <div className='title'>Logowanie</div>

                    <div className='wrapper-input'>
                        <input aria-label="Login" value={login} onChange={handleOnChangeLogin} onFocus={()=> handleOnFocus('email')} onBlur={handleOnFocus} type="text"/>
                        <span className={(isActive  === 'email') || login ? 'focus-input-active' : 'focus-input'}>Email lub login</span>
                    </div>
                    
                    <div className='wrapper-input'>
                        <input aria-label="Password" value={password} onChange={handleOnChangePassword} onFocus={()=> handleOnFocus('password')} onBlur={handleOnFocus} type="password"/>
                        <span className={(isActive === 'password') || password? 'focus-input-active' : 'focus-input'}>Hasło</span>
                    </div>

                    <button type="button" onClick={sendLoginForm} className='login-button'>Zaloguj</button>
                    <div className='login-action-wrap'>
                        <div className="register-button" onClick={handleRegisterActive}>Stwórz konto</div>
                        <div className="register-button" onClick={handleForgotActive}>Nie pamietasz hasła?</div>
                    </div>


                </form>                
    )
};
export default LoginPanel; 