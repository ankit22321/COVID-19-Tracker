import React, { useState, useEffect} from 'react';
import { fetchDailyData, fetchCountryDailyData } from '../../api';
import { Line } from 'react-chartjs-2';
import styles from './LineChart.module.css';

const LineChart = ({country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            country ? setDailyData(await fetchCountryDailyData(country)):
            setDailyData(await fetchDailyData());
        }
        fetchApi();
    }, [country]);

    return(
        <div className={styles.container}>
            {
                dailyData.length ?
                (<Line 
                    data={{
                        labels: dailyData.map(({date}) => new Date(date).toDateString()),
                        datasets: [{
                            data: dailyData.map(({confirmed}) => confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true
                        }, 
                        {
                            data: dailyData.map(({deaths}) => deaths),
                            label: 'Deceased',
                            backgroundColor: 'rgba(255, 0, 0, 0.5)',
                            fill: true
                        }],
                    }}
                />) : null
            }
        </div>
    );
}
export default LineChart;