import React from 'react'
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const ChartComponents = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Overall Revenue',
        data: [500, 1000, 250, 600, 700, 900, 800, 750, 650, 700, 750, 800],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw}$`,
          afterLabel: () => 'Overall Revenue',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value}`,
          stepSize: 200,
        },
      },
    },
  };

  return (
    <div className="w-full p-4 bg-white shadow rounded-lg max-w-4xl sm:max-w-4xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-[#161439]">Earning Reports</h2>
        <button className="px-4 py-1 text-gray-600 bg-gray-100 rounded-md">All</button>
      </div>
      <div className="relative" style={{ height: '300px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartComponents;
