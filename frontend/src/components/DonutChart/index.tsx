import axios from 'axios';
import Chart from 'react-apexcharts';
import { BASE_URL } from 'utils/requests';
import { SaleSum } from 'types/sales';
import { useEffect, useState } from 'react';

type ChartData ={
    labels: string[];
    series: number[];
}

const DonutChart = () => {

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series : []});

    useEffect(() => {
        axios.get(BASE_URL + '/sales/amount-by-seller')
        .then((response => {
            const data = response.data as SaleSum[];
            const myLabels = data.map(x => x.sellerName);;
            const mySeries = data.map(x => x.sum);

            setChartData({ labels: myLabels, series: mySeries});
        }));
    }, [])


    const options = {
        legend: {
            show:  true
        }
    };
    /*const mockData = {
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé'],
        series: [477138, 499928, 444867, 220426, 473088]
    }*/
    return (
        <Chart 
            options={{ ...options, labels: chartData.labels}}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
  }
  
  export default DonutChart;