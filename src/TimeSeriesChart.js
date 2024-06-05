import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const TimeSeriesChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default TimeSeriesChart;
