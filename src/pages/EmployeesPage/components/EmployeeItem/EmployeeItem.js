import React from 'react';
import { parse, format} from 'date-fns';
import { GrEdit, GrTrash } from "react-icons/gr";
import { MdOutlineAddCircleOutline } from "react-icons/md";


import './EmployeeItem.css'
import DefaultImgEmployee from '../../../../img/deafult-user.jpeg';

const EmployeeItem = (props) => {
    const {_id, active, firstName, lastName, salary, jobPosition, dateOfEmployment, handleEdit, archiveEmployee, activateEmployee} = props;
    const date = format(parse(dateOfEmployment, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", new Date()), 'dd-MM-yyyy');
    return (
        <div className='employee-list-item'>
            <span className='img-account'> 
                <img src={DefaultImgEmployee} alt="" />
            </span>
            <div className='info-item'>
                <span>Imię i nazwisko</span>
                <span>{firstName} {lastName}</span>
            </div>
            <div className='info-item'>
                <span>Pensja</span>
                <span>{salary} PLN</span>
            </div>
            <div className='info-item'>
                <span>Stanowisko</span>
                <span>{jobPosition}</span>
            </div>
            <div className='info-item'>
                <span>Data zatrudnienia</span>
                <span>{date}</span>
            </div>
            <div className='actions'>
                <span>Akcja</span>
                <div className='buttons'>
                    <button onClick={()=> handleEdit(_id) } className='action-button'><GrEdit/></button>
                    { active ?
                    <button onClick={()=> archiveEmployee(_id)} className='action-button'><GrTrash/></button>
                    :
                    <button onClick={()=> activateEmployee(_id)} className='action-button'><MdOutlineAddCircleOutline /></button>
                    }
                </div>
            </div>
        </div>

    )
};

export default EmployeeItem;