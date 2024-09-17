import React from 'react';
import './ProgressBar.css';
import { IoPerson } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";



const ProgressBar = ({step}) => {
    return (
        <>
        
        <div className='progress-bar'>
            <span className={step >= 0 ? 'circle-active' : 'circle'}><IoPerson/></span>
            <span className={step >= 0 ? 'line-active' : 'line'}></span>
            <span className={step >=  1 ? 'circle-active' : 'circle'}><FaHome/></span>
            <span className={step >= 1 ? 'line-active' : 'line'}></span>
            <span className={step >= 2 ? 'circle-active' : 'circle'}><IoMdMail/></span>
        </div>
        </>
    )
};

export default ProgressBar;