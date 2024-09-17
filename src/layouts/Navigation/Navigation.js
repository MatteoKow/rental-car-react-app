import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import request from '../../helpers/request';
import userImage from '../../img/deafult-user.jpeg';
import logo from '../../img/logo.png';
import './Navigation.css';

const NavBar = React.memo(({ isLoggedIn , setIsLoggedIn}) => {
  let token = null;
  const [user, setUser] = useState([]);

  const getUser = (token) => {
    const decodedToken = jwt_decode(token);
    const id = decodedToken.id; 

    request.get(`/users/${id}`, {
      headers: {
         'Authorization': token
     }
    })
    .then(res => {
      setUser(res.data)
    })
    .catch(e => {
      const { code, message} = e.response.data;
      if (code === 400) {
          alert(message);
      }
    })
  }

  useEffect(() => {
    token = Cookies.get('access_token');
    setIsLoggedIn(!!token);
    if(isLoggedIn){
      getUser(token);
    }
  }, [isLoggedIn]);

  return (
        <div className='navigation-block'>
          <div className='menu-bar'>
            <div className='logo'><img src={logo} alt="" /></div>
              <div className='tabs'>
                <ul> 
                  <li><Link to='/'>STRONA GŁÓWNA</Link></li>
                  <li><Link to='/our-cars'>NASZE AUTA</Link></li>
                  <li><Link to='/about-us'>O NAS</Link></li>
                  {isLoggedIn ? 
                    <li className='logged'>
                      <Link to='/user'>
                        <img src={userImage} alt=""/>
                        <span>{user.firstName ? user.firstName[0] : null}. {user.lastName}</span>
                      </Link>
                    </li> 
                    : 
                    <Link to='/login'> <li className='login'>Zaloguj</li></Link>

                  }
                  
                </ul>
              </div>

          </div>

        </div>
  )
})

export default NavBar;
