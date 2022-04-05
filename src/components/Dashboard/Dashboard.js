import React from 'react';
import ChartOne from '../../ChartOne/ChartOne';
import ChartTwo from '../../ChartTwo/ChartTwo';
import './Dashboard.css';



const Dashboard = () => {
    return (
        <div className='dashboard'>
            <ChartOne></ChartOne>
            <ChartTwo></ChartTwo>
        </div>
    );
};

export default Dashboard;