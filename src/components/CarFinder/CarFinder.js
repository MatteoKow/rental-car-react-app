import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { startOfHour, addHours, parse, format } from 'date-fns';
import './CarFinder.css';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { AiFillCar } from 'react-icons/ai';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { pl } from 'date-fns/locale';

const CarFinder = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);
  const calendarRef = useRef(null);
  const selectRef = useRef(null);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const getRoundedHourFromStartDate = () => {
    const startDate = state[0].startDate;
    const roundedStartDate = startOfHour(startDate);
    const nextHour = addHours(roundedStartDate, 1);
    const formattedHour = format(nextHour, 'HH:mm');
    return formattedHour;
  };

  const getRoundedHourFromEndDate = () => {
    const endDate = state[0].endDate;
    const roundedStartDate = startOfHour(endDate);
    const nextHour = addHours(roundedStartDate, 2);
    const formattedHour = format(nextHour, 'HH:mm');
    return formattedHour;
  };

  const [startHour, setStartHour] = useState(getRoundedHourFromStartDate());
  const [endHour, setEndHour] = useState(getRoundedHourFromEndDate());

  const handleStartHour = (e) => setStartHour(e.target.value);
  const handleEndHour = (e) => setEndHour(e.target.value);

  const handleClick = (e) => {
    if (e.target.classList.contains('date-element')) {
      setActive(!active);
    }
  };

  const generateOptions = () => {
    const options = [];

    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');
        const time = `${formattedHour}:${formattedMinute}`;

        options.push(
          <option key={time} value={time}>
            {time}
          </option>
        );
      }
    }

    return options;
  };

  const startDate = state[0].startDate.toLocaleString().split(', ')[0];
  const endDate = state[0].endDate.toLocaleString().split(', ')[0];

  const startDateObj = format(parse(startDate, 'dd.MM.yyyy', new Date()), 'dd-MM-yyyy');
  const endDateObj = format(parse(endDate, 'dd.MM.yyyy', new Date()), 'dd-MM-yyyy');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setActive(false);
      }
    };
  
    document.addEventListener('click', handleClickOutside);
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [active]);
  
  const handleDateClick = (e) => {
    e.stopPropagation();
    setActive(!active);
  };

  return (
    <div className="box">
      <div className="box-back">
        <AiFillCar className="icon" />
        <h1>Znajdź swoje auto</h1>
      </div>
      <h2>Najlepszy wybór dla ciebie</h2>
      <div className="date-wrapper">
        <div className="date">
          <div className="date-info">
            <label>DATA ODBIORU</label>
            <div onClick={handleDateClick} className="date-element">
              {startDate}
            </div>
          </div>
          <div className="date-info">
            <label>GODZINA</label>
            <select onChange={handleStartHour} className="date-element" value={startHour} ref={selectRef}>
              {generateOptions()}
            </select>
          </div>
        </div>

        <div className="date">
          <div className="date-info">
            <label>DATA ZWROTU</label>
            <div onClick={handleDateClick} className="date-element">
              {endDate}
            </div>
          </div>
          <div className="date-info">
            <label>GODZINA</label>
            <select onChange={handleEndHour} value={endHour} className="date-element" ref={selectRef}>
              {generateOptions()}
            </select>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          navigate(`/results/?startDate=${startDateObj}&endDate=${endDateObj}&startHour=${startHour}&endHour=${endHour}`);
        }}
        className="find-button"
      >
        Szukaj samochodu
        <HiOutlineArrowNarrowRight className="icon" />
      </button>
      <div className="calendar" ref={calendarRef}>
        {active && (
          <DateRange
            locale={pl}
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            showDateDisplay={false}
            minDate={new Date()}
          />
        )}
      </div>
    </div>
  );
};

export default CarFinder;
