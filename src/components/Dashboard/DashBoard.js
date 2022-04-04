
import React, { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import PieChartDemo from '../PieChartDemo/PieChartDemo';



import './DashBoard.css'
const DashBoard = () => {
    const [chartData, setChartData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChartData(data))
    }, [])
    console.log(chartData)
    const data = chartData;
    return (
        <div className='container '>
            <LineChart width={200} height={300} data={data}>
                <Line dataKey={'investment'}></Line>
                <Line dataKey={'sell'}></Line>
                <Line dataKey={'revenue'}></Line>
                <XAxis dataKey={'month'}></XAxis>
                <Tooltip />
                <YAxis></YAxis>


            </LineChart>
            <PieChartDemo></PieChartDemo>

        </div >

    )
};

export default DashBoard;