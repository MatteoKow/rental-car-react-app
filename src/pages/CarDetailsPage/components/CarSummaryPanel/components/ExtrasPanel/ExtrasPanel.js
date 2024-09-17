import React from 'react';
import './ExtrasPanel.css'
import CarSummaryItem from '../CarSummaryItem/CarSummaryItem';

const ExtrasPanel = (props) => {
    const {
        handleOnChangeDriver, 
        handleOnChangeInsurance,
        handleOnChangeAssistane,
        handleOnChangeNavigation,
        handleOnChangeWiFi,
        handleOnChildSeat,
        checkedDriver,
        checkedInsurance,
        checkedAssistance,
        checkedNavigation,
        checkedWiFi,
        checkedChildSeat
    } = props;
    return (
        <div className='extras-panel'>
            <span>DODATKI</span>
            <CarSummaryItem handleOnChange={handleOnChangeDriver} checked={checkedDriver} title={"DODATKOWY KIEROWCA"} price={"100 zł"}/>
            <CarSummaryItem handleOnChange={handleOnChangeInsurance} checked={checkedInsurance} title={"UBEZPIECZENIE"} price={"50 zł"}/>
            <CarSummaryItem handleOnChange={handleOnChangeAssistane} checked={checkedAssistance} title={"POMOC DROGOWA 24/7"} price={"50 zł"}/>
            <CarSummaryItem handleOnChange={handleOnChangeNavigation} checked={checkedNavigation} title={"NAWIGACJA"} price={"10 zł"}/>
            <CarSummaryItem handleOnChange={handleOnChangeWiFi} checked={checkedWiFi} title={"Wi-Fi"} price={"20 zł"}/>
            <CarSummaryItem handleOnChange={handleOnChildSeat} checked={checkedChildSeat} title={"FOTELIK DZIECIĘCY"} price={"20 zł"}/>
        </div>
    );
};

export default ExtrasPanel;