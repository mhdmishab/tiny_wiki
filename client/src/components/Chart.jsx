import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart,
  ArcElement,
  DoughnutController,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { useSelector } from 'react-redux';

Chart.register(
  ArcElement,
  DoughnutController,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip
);

function CustomChart() {
  const { chartData } = useSelector((state) => state.admin);
  const labels = chartData?.map((item) => item._id);
  const count = chartData?.map((item) => item.count);
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Keywords and count',
        font: {
          size: 16,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        data: count,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      className="rounded-sm border border-stroke bg-white p-6 shadow-sm"
    >
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default CustomChart;
