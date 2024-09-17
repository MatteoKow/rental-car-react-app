import React from 'react';
import './StatisticsCounterPanel.css'
import CounterItem from './components/CounterItem/CounterItem';

const StatisticsCounterPanel = () => {
    return (
        <section className='statistics-panel-basic'>
            <CounterItem quantity={"100"} counterName={"VEHICLES"}/>
            <CounterItem quantity={"2420"} counterName={"RESERVATION"}/>
            <CounterItem quantity={"1232"} counterName={"CLIENTS"}/>
            <CounterItem quantity={"4 YEARS"} counterName={"EXPERIENCE"}/>
        </section>
    )
};


export default StatisticsCounterPanel;