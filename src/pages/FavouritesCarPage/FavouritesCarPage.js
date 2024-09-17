import React, { useEffect, useState } from 'react';
import './FavouritesCarPage.css';
import CarsPanel from './components/CarsPanel/CarsPanel';
import request from '../../helpers/request';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

const FavouritesCarPage = () => {

    const [allCars, setAllCars] = useState([]);
    const [favourites, setFavourites] = useState();

    const getFavourites = () => {
        const token = Cookies.get('access_token');
        const decodedToken = jwt_decode(token);
        const id = decodedToken.id;
    
        request.get(`/users/favourites/${id}`,{
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            setFavourites(res.data)
        })
        .catch(e => {
            const { code, message} = e.response.data;
            if (code === 400) {
                alert(message);
            }
        })
    }

    const addFavourites = (carId) => {
        const token = Cookies.get('access_token');
        const decodedToken = jwt_decode(token);
        const id = decodedToken.id;
    
        setFavourites((prevState) => {
            return [...prevState, carId];
        });
    
        request.patch(`/users/favourites/${id}`, {
            favourites: [...favourites, carId], 
        }, {
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(e => {
            const { code, message } = e.response.data;
            if (code === 400) {
                alert(message);
            }
        });
    };
    

    const removeFavourites = (carId) => {
        const token = Cookies.get('access_token');
        const decodedToken = jwt_decode(token);
        const id = decodedToken.id;
        setFavourites(favourites.filter(id => id !== carId))
    
        
        request.patch(`/users/favourites/${id}`,{
            favourites: favourites.filter(id => id !== carId)
        },{
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            getFavouritesCars();

        })
        .catch(e => {
            const { code, message} = e.response.data;
            if (code === 400) {
                alert(message);
            }
        })
    }

    const getFavouritesCars = () => {
        const token = Cookies.get('access_token');
        const decodedToken = jwt_decode(token);
        const id = decodedToken.id;
        request.get(`users/favourites/user/${id}`,{
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            getFavourites();
            setAllCars(res.data);
        })
        .catch(e => {
            const { code, message} = e.response.data;
            if (code === 400) {
                alert(message);
            }
        })
    }
    
    useEffect(getFavouritesCars,[])

    return (
        <section className='favourites-car-page'>
            <div className='title-fav'>Ulubione</div>
            <CarsPanel allCars={allCars}  favourites={favourites} addFavourites={addFavourites}  removeFavourites={removeFavourites}/>
        </section>
        


    );
};

export default FavouritesCarPage;