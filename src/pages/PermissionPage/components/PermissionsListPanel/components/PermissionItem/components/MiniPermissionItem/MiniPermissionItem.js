import React from 'react';
import './MiniPermissionItem.css';

const roleNames = [
    {
        color: "#0766AD",
        name: "Samochody",
        id: 2
    },
    {
        color: "#29ADB2",
        name: "Rezerwacje",
        id: 3
    },
    {
        color: "#676767",
        name: "Pracownicy",
        id: 4
    },
    {
        color: "#676767",
        name: "Statystyki",
        id: 5
    },
]
const MiniPermissionItem = ({ role }) => {
    const roleName = roleNames.find(roleName => roleName.id === role);

    const itemStyle = {
        backgroundColor: roleName ? roleName.color : 'rgb(77, 69, 69)', 
    };
    
    return (
        <div className='mini-permission-item' style={itemStyle}>
            {roleName ? roleName.name : null}
        </div>
    );
};

export default MiniPermissionItem;