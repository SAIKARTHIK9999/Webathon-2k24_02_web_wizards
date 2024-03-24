"use client"
import React, { useState, useEffect } from 'react';

const Goals = () => {
  const [data, setData] = useState<{ FoodItem: string; Cals_per100grams: string }[]>([]);
  const [fruit, setFruit] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (fruit.trim() === '') return; // Don't fetch if fruit is empty

    const timeoutId = setTimeout(() => {
      fetchData();
    }, 500); // Delay of 500ms

    // Cleanup function to clear timeout on component unmount or when fruit changes
    return () => clearTimeout(timeoutId);
  }, [fruit]); // Fetch data whenever the fruit changes

  const fetchData = async () => {
    try {
      const response = await fetch(`https://ultimately-vocal-toucan.ngrok-free.app/${fruit}/`, {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData);
      setError('');
    } catch (error) {
      console.error('Error fetching data:', error);
      setData([]);
      setError('Failed to fetch data. Please check the fruit name and try again.');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Food Items and Calories</h2>
      {/* Input field for fruit name */}
      <input
        type="text"
        value={fruit}
        onChange={(e) => setFruit(e.target.value)}
        placeholder="Enter fruit name"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 mb-4"
      />
      {/* Display error message if any */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {/* Display fetched data */}
      {data.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Data for {fruit}</h3>
          <ul className="mt-2">
            {data.map((item, index) => (
              <li key={index} className="mb-2">
                <strong>{item.FoodItem}</strong>: {item.Cals_per100grams} calories per 100 grams
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className='mt-96'>

      </div>
    </div>
  );
};

export default Goals;
