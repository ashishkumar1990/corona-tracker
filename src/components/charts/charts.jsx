import React,{useState,useEffect} from "react";
import {fetchDailyData} from '../../api';
import {Line,Bar} from 'react-chartjs-2'
import styles from './charts.module.css'

const Charts=({data:{confirmed,recovered,deaths, active},country, stateName})=>{
    let [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        };
        fetchAPI();
    },[]);
    const lineChart = (
        dailyData.length ? (
            <Line data={{
            labels: dailyData.map(({date})=>date),
            datasets: [{
                data: dailyData.map(({confirmed})=>confirmed),
                label:'Infected',
                borderColor:'#3333ff',
                fill:true
            },
                {
                    data: dailyData.map(({deaths})=>deaths),
                    label:'Deaths',
                    borderColor:'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill:true
                }]
        }}/>) : null
    );
    const getLabels = ()=> {
        if(stateName){
            return {
                label : ['Infected','Recovered','Deaths', 'Active'],
                background: ['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)', 'yellow'],
                data: [confirmed.value,recovered.value,deaths.value, active.value]
            }
        }
        return {
            label : ['Infected','Recovered','Deaths'],
            background: ['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
            data: [confirmed.value,recovered.value,deaths.value]
        };

    }
    const barChart = (
        confirmed ? (
            <Bar data={{labels: getLabels().label ,
                datasets: [{
                    label:'People',
                    backgroundColor: getLabels().background,
                    data: getLabels().data
                }]

            }}
            options={{
                legend:{display:false},
                title:{display:true,text:`Current state in ${country} ${stateName ? `-> ${stateName}` : ''}`}
            }}/>) : null
    );
    return (
       <div className={styles.container}>
           {country?barChart:lineChart}
       </div>
    )
};
export default Charts;