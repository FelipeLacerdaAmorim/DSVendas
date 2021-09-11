import Chart from 'react-apexcharts';
const DonutChart = () => {
    const options = {
        legend: {
            show:  true
        }
    };
    const mockData = {
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé'],
        series: [477138, 499928, 444867, 220426, 473088]
    }
    return (
        <Chart 
            options={{ ...options, labels: mockData.labels}}
            series={mockData.series}
            type="donut"
            height="240"
        />
    );
  }
  
  export default DonutChart;