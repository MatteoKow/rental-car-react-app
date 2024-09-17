import React, { useEffect, useState } from 'react';
import './OurCarsPage.css';
import CarsPanel from './components/CarsPanel/CarsPanel';
import TypeCarFilterPanel from './components/TypeCarFilterPanel/TypeCarFilterPanel';
import MakesFilterPanel from './components/MakesFilterPanel/MakesFilterPanel';
import request from '../../helpers/request';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';


const OurCarsPage = () => {
    const [allCars, setAllCars] = useState([]);
    const [favourites, setFavourites] = useState();
    const [uniqueMakes, setUniqueMakes] = useState([]);
    const [typeCar, setTypeCar] = useState(null);
    const [makeCar, setMakeCar] = useState(null);

    const handleTypeCar = (type) => {
        setTypeCar(type === typeCar ? null : type);
    };

    const handleMakeCar = (make) => {
        setMakeCar(make === makeCar ? null : make);
    };

    const showItems = () => {
        const token = Cookies.get('access_token');
        
        request.get('/cars')
            .then(res => {
                if(token) getFavourites();
                setAllCars(res.data);
                const uniqueMakes = res.data.reduce((uniqueMakes, car) => {
                    const { make } = car;
                    if (!uniqueMakes.some(item => item.name === make)) {
                        uniqueMakes.push({ name: make, logo: car.makeImage });
                    }
                    return uniqueMakes;
                }, []);
                setUniqueMakes(uniqueMakes);
            })
            .catch(e => {
                const { code, message } = e.response.data;
                if (code === 400) {
                    alert(message);
                }
            });
    };

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

        if(token) {
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
        } else {
            alert("Zaloguj sie")
        }

    };
    

    const removeFavourites = (carId) => {
        const token = Cookies.get('access_token');

        if(token){
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
                console.log(res.data);
    
            })
            .catch(e => {
                const { code, message} = e.response.data;
                if (code === 400) {
                    alert(message);
                }
            })
        } else {
            alert("Zaloguj sie")
        }

    }




    useEffect(() => {
        showItems();
    }, []);

    const filteredCars = allCars.filter(car => {
        if ((typeCar === null || typeCar === 'Wszystkie') && (makeCar === null || makeCar === 'Wszystkie')) {
            return true;
        } else if ((typeCar === null || typeCar === 'Wszystkie') && car.make === makeCar) {
            return true;
        } else if (typeCar === car.typeCar && (makeCar === null || makeCar === 'Wszystkie')) {
            return true;
        } else if (typeCar === car.typeCar && car.make === makeCar) {
            return true;
        }
        return false;
    });

    return (
        <section className='our-cars-page'>
            <TypeCarFilterPanel handleTypeCar={handleTypeCar} selectedType={typeCar}/>
            <MakesFilterPanel uniqueMakes={uniqueMakes} handleMakeCar={handleMakeCar} selectedMake={makeCar}/>
            <CarsPanel allCars={filteredCars}  favourites={favourites} addFavourites={addFavourites}  removeFavourites={removeFavourites}/>
        </section>
    );
};

export default OurCarsPage;
