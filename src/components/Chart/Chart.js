import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'
import styles from './Chart.module.css'

export const Chart = ({ data :{confirmed, recovered, deaths}, country }) => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true,
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backbgroundColor: 'rgba(255,0,0,0.5)',
                            fill: true,
                        }]
                    }}
                />
            ) : null

    );

    console.log(confirmed, recovered, deaths)
    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(41, 41, 231, 0.856)',
                            'rgba(16, 216, 16, 0.685)',
                            'rgba(209, 22, 22, 0.698)',
                        ],
                        data :[confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` }
                }}
            />
        ) : null
    )
    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}
