import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { AiFillHome, AiFillFileAdd} from "react-icons/ai";
import { FaCar } from "react-icons/fa";
import { MdAccountBox, MdManageAccounts, MdSupervisorAccount, MdOutlineFavoriteBorder} from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";

import { AiOutlineMessage } from "react-icons/ai";

import { TbBrandBooking} from "react-icons/tb";
import { HiOutlineLogout} from "react-icons/hi";


import './UserNavigation.css'
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

const UserNavigation = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    let role = "";
    try {
        const jwtToken = Cookies.get('access_token');
        const decodedToken = jwt_decode(jwtToken);
        role = decodedToken.role;
      } catch (error) {
        console.error('Błąd dekodowania tokenu JWT:', error);
      }

      const handleLogout = () => {
        Cookies.remove('access_token');
        setIsLoggedIn(false);
        navigate('/');
      }

    return (
        <aside className='user-panel'>
            <ul> 
                {/* //jakies logo jescze */}
                {/* <li><Link to='/user'><AiFillHome className='icon'/><span>Dashboard</span> </Link> </li> */}
                <li><Link to='my-profile'><MdAccountBox className='icon'/><span>Mój profil</span> </Link></li>
                {role.includes(1) && <li><Link to='user-bookings'><TbBrandBooking className='icon'/><span>Rezerwacje</span> </Link></li>}
                {role.includes(1) && <li><Link to='reviews'><AiOutlineMessage className='icon'/><span>Opinie</span> </Link></li>}
                {role.includes(1) && <li><Link to='favourites'><MdOutlineFavoriteBorder className='icon'/><span>Ulubione</span> </Link></li>}
                {role.includes(2) && <li><Link to='cars'><FaCar className='icon'/><span>Samochody</span> </Link></li>}
                {role.includes(2) && <li><Link to='add-car'><AiFillFileAdd className='icon'/><span>Dodaj samochód</span> </Link></li>}
                {role.includes(3) && <li><Link to='all-reviews'><AiOutlineMessage className='icon'/><span>Opinie</span> </Link></li>}
                {role.includes(3) && <li><Link to='bookings'><TbBrandBooking className='icon'/><span>Rezerwacje</span> </Link></li>}
                {role.includes(4) && <li><Link to='employees'><MdSupervisorAccount className='icon'/><span>Pracownicy</span> </Link></li>}
                {role.includes(4) && <li><Link to='accounts'><MdManageAccounts className='icon'/><span>Konta</span></Link></li>}
                {role.includes(5) && <li><Link to='statistics'><IoStatsChart className='icon'/><span>Statystyki</span></Link></li>}

                <li onClick={handleLogout}><HiOutlineLogout className='icon'/> <span>Wyloguj</span></li>
            </ul>
        </aside>
    )
};

export default UserNavigation;