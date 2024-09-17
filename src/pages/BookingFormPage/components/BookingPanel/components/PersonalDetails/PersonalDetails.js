import React from 'react';

import './PersonalDetails.css'
const PersonalDetails = (props) => {
    const {
        firstName,
        lastName,
        day,
        month,
        year,
        drivingLicense,
        handleFirstName,
        handleLastName,
        handleDay,
        handleMonth,
        handleYear,
        handleDrivingLicense
    } = props;

    const generateDayOptions = () => {
        const options = [];
        for (let day = 1; day <= 31; day++) {
          const paddedDay = day.toString().padStart(2, '0');
          options.push(
            <option key={paddedDay} value={paddedDay}>
              {paddedDay}
            </option>
          );
        }
        return options;
      };
      const generateMonthOptions = () => {
        const options = [];
        for (let month = 1; month <= 12; month++) {
          const paddedMonth = month.toString().padStart(2, '0');
          options.push(
            <option key={paddedMonth} value={paddedMonth}>
              {paddedMonth}
            </option>
          );
        }
        return options;
      };

      const generateYearOptions = () => {
        const options = [];
        const currentYear = new Date().getFullYear();
        const startYear = 1940;
        const endYear = currentYear - 18;
    
        for (let year = startYear; year <= endYear; year++) {
          options.push(
            <option key={year} value={year}>
              {year}
            </option>
          );
        }
    
        return options;
      };
      
    return (
        <>
            <div className='title-form'>Imię i nazwisko</div>
            <div className='row-1'>
                <input placeholder="Imię" type="text" value={firstName} onChange={handleFirstName} />
                <input placeholder="Nazwisko" type="text" value={lastName} onChange={handleLastName} />
            </div>
            <div className='title-form'>Data urodzenia</div>
            <div className='row-2'>
                <select name="day" id="day" value={day} onChange={handleDay}>
                <option key={0} value={0}>Dzień</option>
                    {generateDayOptions()}
                </select>
                <select name="month" id="month" value={month} onChange={handleMonth}>
                    <option key={0} value={0}>Miesiąc</option>
                    {generateMonthOptions()}
                </select>

                <select name="year" id="year" value={year} onChange={handleYear}>
                    <option key={0} value={0}>Rok</option>
                    {generateYearOptions()}
                </select>

                {/* <input  placeholder="Dzień" type="number" value={day} min={1} max={31} onChange={handleDay} /> */}
                {/* <input placeholder="Miesiąc" type="number" value={month} onChange={handleMonth} /> */}
                {/* <input placeholder="Rok" type="number" value={year} onChange={handleYear} /> */}
            </div>
            <div className='title-form'>Prawo jazdy</div>

            <div className='row-5'>
                <input placeholder="Numer prawa jazdy"type="text" value={drivingLicense} onChange={handleDrivingLicense} />
            </div>
        </>
    )
};

export default PersonalDetails;