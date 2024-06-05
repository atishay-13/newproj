import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const SeverityPieChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default SeverityPieChart;
