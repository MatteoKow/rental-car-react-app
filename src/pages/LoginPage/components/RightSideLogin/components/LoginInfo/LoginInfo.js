import React from 'react';

const LoginInfo = (props) => {
    const {
        registerLogin,
        email, 
        registerPassword, 
        confirmRegisterPassword,
        handleRegisterLogin, 
        handleEmail,
        handleRegisterPassword,
        handleConfirmRegisterPassword
    } = props;
    return (
        <>
            <input value={registerLogin} onChange={handleRegisterLogin} type="text" placeholder='Login'/>
            <input value={email} onChange={handleEmail} type="text" placeholder='Email'/>
            <input value={registerPassword} onChange={handleRegisterPassword} type="password" placeholder='Hasło'/>
            <input value={confirmRegisterPassword} onChange={handleConfirmRegisterPassword} type="password" placeholder='Powtórz hasło'/>
        </>
        
    )
};

export default LoginInfo;