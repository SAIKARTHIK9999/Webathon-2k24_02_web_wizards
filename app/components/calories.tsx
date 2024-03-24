"use client"
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const CaloriesChart = () => {
  const [data, setData] = useState<{ FoodItem: string; Cals_per100grams: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ultimately-vocal-toucan.ngrok-free.app/apple');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const foodItems = data.map((item) => item.FoodItem);
  const calories = data.map((item) => parseFloat(item.Cals_per100grams));

  const chartData = {
    labels: foodItems,
    datasets: [
      {
        label: 'Calories per 100 grams',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
        data: calories,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        labels: foodItems,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Calories per 100 grams</h2>
      <Bar data={chartData}/>
    </div>
  );
};

export default CaloriesChart;
