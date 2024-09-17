import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { parse, format, differenceInHours} from 'date-fns';
import { BsSortDownAlt } from "react-icons/bs";
import request from '../../helpers/request';
import SearchItem from './components/SearchItem/SearchItem';
import './SearchResultsPage.css';
import FilterPanel from './components/FilterPanel/FilterPanel';




const SearchResultsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const startHour = searchParams.get('startHour');
    const endHour = searchParams.get('endHour');

    const startDateTime = parse(`${startDate} ${startHour}`, 'dd-MM-yyyy HH:mm', new Date());
    const endDateTime = parse(`${endDate} ${endHour}`, 'dd-MM-yyyy HH:mm', new Date());

    const hoursDifference = differenceInHours(endDateTime, startDateTime);
    const daysDifference = Math.ceil(hoursDifference / 24);

    const startDateObj = format(startDateTime, 'yyyy-MM-dd HH:mm');
    const endDateObj = format(endDateTime, 'yyyy-MM-dd HH:mm');

    
    const [allCars, setAllCars] = useState([]);
    const [uniqueMakes, setUniqueMakes] = useState([]);
    const [uniqueTypes, setUniqueTypes] = useState([]);
    const [uniqueFuels, setUniqueFuels] = useState([]);
    const [uniqueTransmissions, setUniqueTransmissions] = useState([]);

    
    const [selectedTypes, setSelectedTypes] = useState({});
    const [selectedMakes, setSelectedMakes] = useState({});
    const [selectedFuels, setSelectedFuels] = useState({});
    const [selectedTransmissions, setSelectedTransmissions] = useState({});

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);

    const [sort, setSort] = useState();

    const handleOnSelectSort = (e) => setSort(e.target.value)

    const handleOnClick = (id) => navigate(`/results/car-details/${id}?startDate=${startDate}&endDate=${endDate}&startHour=${startHour}&endHour=${endHour}`)
    const handleSelectedMakes = (option, isChecked) => {
        setSelectedMakes({
            ...selectedMakes,
            [option]: isChecked,
          });
    }
    const handleSelectedTypes = (option, isChecked) => {
        setSelectedTypes({
            ...selectedTypes,
            [option]: isChecked,
          });
    }
    const handleSelectedFuels = (option, isChecked) => {
        setSelectedFuels({
            ...selectedFuels,
            [option]: isChecked,
          });
    }
    const handleSelectedTransmissions = (option, isChecked) => {
        setSelectedTransmissions({
            ...selectedTransmissions,
            [option]: isChecked,
          });
    }
    const handleMinPrice = (e) => { setMinPrice(Number(e));}
    const handleMaxPrice = (e) => setMaxPrice(Number(e));

    const filteredParams = {
        types: Object.keys(selectedTypes).filter(type => selectedTypes[type]),
        startDate: startDateObj,
        endDate: endDateObj,
        makes: Object.keys(selectedMakes).filter(make => selectedMakes[make]),
        fuels: Object.keys(selectedFuels).filter(fuel => selectedFuels[fuel]),
        transmissions: Object.keys(selectedTransmissions).filter(transmission => selectedTransmissions[transmission]),
        minPrice,
        maxPrice,
        sortByPrice: Number(sort)
    }


    const showItems = () => {
        request.post('/cars/filter',filteredParams)
        .then(res => {
            setAllCars(res.data);
            const uniqueMakes = res.data.reduce((uniqueMakes, car) => {
                const name = car.make;
                if (!uniqueMakes.some(make => make === name)) {
                    uniqueMakes.push(name);
                }
                return uniqueMakes;
            }, []);
            setUniqueMakes(uniqueMakes)

            
            const uniqueTypes = res.data.reduce((uniqueTypes, car) => {
                const name = car.typeCar;
                if (!uniqueTypes.some(type => type === name)) {
                    uniqueTypes.push(name);
                }
                return uniqueTypes;
            }, []);
            setUniqueTypes(uniqueTypes)

            const uniqueFuels = res.data.reduce((uniqueFuels, car) => {
                const name = car.fuel;
                if (!uniqueFuels.some(fuel => fuel === name)) {
                    uniqueFuels.push(name);
                }
                return uniqueFuels;
            }, []);
            setUniqueFuels(uniqueFuels)

            const uniqueTransmissions = res.data.reduce((uniqueTransmissions, car) => {
                const name = car.transmission;
                if (!uniqueTransmissions.some(transmission => transmission === name)) {
                    uniqueTransmissions.push(name);
                }
                return uniqueTransmissions;
            }, []);
            setUniqueTransmissions(uniqueTransmissions)

        })
        .catch(e => {
            const { code, message } = e.response.data;
            if (code === 400) {
                alert(message);
            }
        });
    };

    useEffect(() => {
        showItems();
    }, [selectedTypes, selectedMakes, selectedFuels, selectedTransmissions, minPrice, maxPrice, sort]);


    const cars = allCars.map((car) => ( <SearchItem key={car._id} car={car} daysDifference={daysDifference}handleOnClick={handleOnClick}/>))

    return(
        <>
            <section className='container-of-results'>
                <FilterPanel 
                    uniqueTypes={uniqueTypes}
                    uniqueMakes={uniqueMakes}
                    uniqueFuels={uniqueFuels}
                    uniqueTransmissions={uniqueTransmissions}
                    handleSelectedTypes={handleSelectedTypes}
                    handleSelectedMakes={handleSelectedMakes}
                    handleSelectedFuels={handleSelectedFuels}
                    handleSelectedTransmissions={handleSelectedTransmissions}
                    handleMinPrice={handleMinPrice}
                    handleMaxPrice={handleMaxPrice}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                />
                

                <section className='cars-finded'>
                <section className='panel-area'> 
                <span>Zanaleziono: {cars.length}</span>
                <div className='sort-panel'>
                <label htmlFor="sort"><BsSortDownAlt size={"30px"}/></label>
                <select onChange={handleOnSelectSort} value={sort} id="sort" name="sort">
                    <option value={0}>Sortuj</option>
                    <option value={1}>Cena rosnąco</option>
                    <option value={-1}>Cena malejaco</option>
                    
                </select>
                </div>
                </section>
                    {cars}
                </section>

            </section>
        </>
    )
};

export default SearchResultsPage;