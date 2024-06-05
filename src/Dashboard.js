// src/Dashboard.js

import React, { useEffect, useState } from 'react';
import TimeSeriesChart from './TimeSeriesChart';
import SeverityPieChart from './SeverityPieChart';
import TopSourceIPsBarChart from './TopSourceIPsBarChart';
import AlertsByCategoryBarChart from './AlertsByCategoryBarChart';
import { fetchData } from './dataService';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className="dashboard">
      <h1>Security Alerts Dashboard</h1>
      <div className="chart-container">
        <h2>Time Series of Alerts</h2>
        <TimeSeriesChart data={data.timeSeries} />
      </div>
      <div className="chart-container">
        <h2>Distribution of Alerts by Severity</h2>
        <SeverityPieChart data={data.severityDistribution} />
      </div>
      <div className="chart-container">
        <h2>Top Source IPs</h2>
        <TopSourceIPsBarChart data={data.topSourceIPs} />
      </div>
      <div className="chart-container">
        <h2>Alerts by Category</h2>
        <AlertsByCategoryBarChart data={data.alertsByCategory} />
      </div>
    </div>
  );
};

export default Dashboard;
