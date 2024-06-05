// src/TopSourceIPsBarChart.js

import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const TopSourceIPsBarChart = ({ data }) => {
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
        type: 'category',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default TopSourceIPsBarChart;
