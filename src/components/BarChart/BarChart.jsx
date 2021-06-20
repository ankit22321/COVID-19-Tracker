import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './BarChart.module.css';

const BarChart = ({data, country}) => {

    return(
        <div className={styles.container}>
            {
                data.confirmed ? 
                <Bar 
                    data={{
                        labels: ['Infected', 'recovered', 'deceased'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)','rgba(0, 255, 0, 0.5)','rgba(255, 0, 0, 0.5)'],
                            data: [data.confirmed, data.recovered, data.deaths]
                        }],
                       
                    }}
                /> : null
            }
        </div>
    );
}
export default BarChart;