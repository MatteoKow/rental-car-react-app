import React from 'react';

import './LoginPersonalInfo.css'
const LoginPersonalInfo = (props) => {
    const {
        firstName, 
        lastName,
        day,
        month,
        year,
        phone,
        handleFirstName,
        handleLastName,
        handleDay,
        handleMonth,
        handleYear ,
        handlePhone 
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
                <input placeholder="Imie" type="text" value={firstName} onChange={handleFirstName} />
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
            </div>
            <div className='title-form'>Telefon</div>
            <div className='row-5'>
                <input placeholder="Numer telefonu" type="text" value={phone} onChange={handlePhone} />
            </div>
        </> 
    )
};

export default LoginPersonalInfo;