import React from 'react';
import './CustomSelect.css';

const CustomSelect = ({active = true, elements, title, value, handleOnChange, type}) => {
    const elementsList = elements.map((element)=> {
            if(type === "employees"){
                return <option key={element._id} value={element._id}>{element.firstName} {element.lastName} - {element.dateOfBirth}</option>
            }
            if(type === "roles"){
                return <option key={element._id} value={element.roles}>{element.name}</option>
            }
})

    return (
        <div  className='custom-select'>
            <label htmlFor={title} >{title}</label>
            <select onChange={handleOnChange} value={value} id="employee" disabled={!active}>
                    {type === "employees" ? <option value={0}>Wybierz pracownika</option> : null}
                    {type === "roles" ? <option value={0}>Wybierz uprawniwnie</option> : null}
                    {elementsList}
                </select>
        </div>

    )
};

export default CustomSelect;

