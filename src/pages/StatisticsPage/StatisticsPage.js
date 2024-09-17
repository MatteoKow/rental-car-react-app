import React, { useEffect, useState } from 'react';
import './StatisticsPage.css';
import StatsByDatePanel from './components/StatsByDatePanel/StatsByDatePanel';
import StatsGeneralPanel from './components/StatsGeneralPanel/StatsGeneralPanel';
import request from '../../helpers/request';
import Cookies from 'js-cookie';

const StatisticsPage = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    const [car, setCar]= useState();
    const [bookingsByDate, setBookingsByDate] = useState();
    const [highestTotalPrice, setHighestTotalPrice] = useState();
    const [longestRentalDuration, setLongestRentalDuration] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [year, setYear] = useState(currentYear);
    const [month, setMonth] = useState(currentMonth);
    const [employeesAmount, setEmployeesAmount] = useState();
    const [carsAmount, setCarsAmount] = useState();
    const [revenueAmount, setRevenueAmount] = useState();
    const [allBookings, setAllBookings] = useState();








    const handleSelectYear = (e) => setYear(e.target.value);
    const handleSelectMonth = (e) => setMonth(e.target.value);

    const getStats = () => {
        const token = Cookies.get('access_token');
        request.post(`/statistics`, {
            year,
            month
        }, { 
            headers: {
                'Authorization': token
            }
        })
        .then( res => {
            setCar(res.data.theBestCar[0]);
            setBookingsByDate(res.data.bookingsCount);
            setHighestTotalPrice(res.data.highestPrice);
            setLongestRentalDuration(res.data.longestDuration);
            setTotalPrice(res.data.totalAmount);
            setEmployeesAmount(res.data.employeesCount);
            setCarsAmount(res.data.carsCount);
            setRevenueAmount(res.data.totalRevenue);
            setAllBookings(res.data.totalBookingsCount);

        })
        .catch(e => {
            const { code, message} = e.response.data;
            if (code === 400) {
                alert(message);
            }
        })
    }


    
    useEffect(getStats,[year, month])
    return (
        <section className='statistics-page'>
            <span className='title-page-stats'>Statystyki</span>
            <div className='select-panel'>
                <select onChange={handleSelectYear} value={year}>
                    <option value={2023}>2023</option>
                    <option value={2024}>2024</option>
                </select>

                <select onChange={handleSelectMonth} value={month}>
                    <option value={1}>Styczeń</option>
                    <option value={2}>Luty</option>
                    <option value={3}>Marzec</option>
                    <option value={4}>Kwiecień</option>
                    <option value={5}>Maj</option>
                    <option value={6}>Czerwiec</option>
                    <option value={7}>Lipiec</option>
                    <option value={8}>Sierpień</option>
                    <option value={9}>Wrzesień</option>
                    <option value={10}>Padziernik</option>
                    <option value={11}>Listopad</option>
                    <option value={12}>Grudzień</option>
                </select>
            </div>
            
            <StatsByDatePanel 
                car={car} 
                max={highestTotalPrice}
                duration={longestRentalDuration}
                totalAmount={totalPrice}
                bookingsAmount={bookingsByDate}
                
            />
            <StatsGeneralPanel
                employeesAmount={employeesAmount}
                carsAmount={carsAmount}
                revenueAmount={revenueAmount}
                allBookings={allBookings}
            />
        </section>
    );
};

export default StatisticsPage;