import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import LoginInfo from '../LoginInfo/LoginInfo';
import './RegisterPanel.css';
import LoginPersonalInfo from '../LoginPersonalInfo/LoginPersonalInfo';



const RegisterPanel = (props) => {
    const [step, setStep] = useState(0);

    const increaseStep = () => setStep(step + 1);
    const decreaseStep = () => setStep(step - 1);

    const stepPage = [
        <LoginPersonalInfo {...props} />, 
        <LoginInfo {...props} />
    ];

    return(
        <section className={'register'}>
            <div className='register-title'>Rejestracja</div>
            <section className='register-form'>
                <form action="">
                    {stepPage[step]}
                </form>
                <div className='buttons'>
                    {step > 0 ? <button className="back" onClick={decreaseStep}>Cofnij</button> : null}
                    {step > 0 ? <button className="next" onClick={props.sendRegisterForm}>Utwórz</button> : <button className="next" onClick={increaseStep}>Dalej</button> }
                </div>
            </section>
        </section>
    )
};
export default RegisterPanel; 