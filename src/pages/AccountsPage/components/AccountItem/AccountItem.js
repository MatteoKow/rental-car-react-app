import React from 'react';
import { parse, format} from 'date-fns';
import { GrEdit, GrTrash } from "react-icons/gr";
import './AccountItem.css'
import DefaultImgEmployee from '../../../../img/deafult-user.jpeg';

const AccountItem = (props) => {
    const {_id, firstName, lastName, email, handleEdit, deleteUser} = props;
    return (
        <div className='account-list-item'>
            <span className='img-account'> 
                <img src={DefaultImgEmployee} alt="" />
            </span>
            <div className='info-item'>
                <span>Imię i nazwisko</span>
                <span>{firstName} {lastName}</span>
            </div>
            <div className='info-item'>
                <span>Email</span>
                <span>{email}</span>
            </div>
            <div className='actions'>
                <span>Akcja</span>
                <div className='buttons'>
                    <button onClick={ ()=> handleEdit(_id)} className='action-button'><GrEdit/></button>
                    <button onClick={()=> deleteUser(_id)} className='action-button'><GrTrash/></button>
                </div>
            </div>

        </div>
    )
};

export default AccountItem;