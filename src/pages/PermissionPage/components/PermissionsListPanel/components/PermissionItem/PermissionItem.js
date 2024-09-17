import React from 'react';
import { GrTrash } from "react-icons/gr";
import './PermissionItem.css'
import MiniPermissionItem from './components/MiniPermissionItem/MiniPermissionItem';



const PermissionItem = (props) => {
    const {_id, name, roles, deleteRole} = props;
    const rolesList = roles.map(role => <MiniPermissionItem key={role} role={role} />)
    
    return (
        <div className='permission-list-item'>
            <div className='info-item'>
                <span>Nazwa</span>
                <span>{name}</span>
            </div>
            <div className='info-item'>
                <span>Uprawnienia</span>
                <span>{rolesList}</span>
            </div>
            <div className='actions'>
                {name !== "admin"? <button onClick={()=> deleteRole(_id)} className='action-button'><GrTrash/></button> : <button className='action-button-disabled'><GrTrash/></button>}
            </div>
        </div>

    )
};

export default PermissionItem;