import React from 'react';
import './UITemplate.css'

const UITemplate = ({children, titleName}) => {
    return (
        <section className='ui-template'>
            {children}
        </section>
    )
};

export default UITemplate;