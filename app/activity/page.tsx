"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Activity = () => {
  const router = useRouter();
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/activities', {
        activity,
        duration,
      });
      setCaloriesBurned(response.data.caloriesBurned);
      alert('Activity saved');
      console.log('Activity saved:', response.data);
      router.push('/goals');
    } catch (error) {
      console.error('Error logging activity:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Log Activity</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="activity" className="block text-gray-700">Activity:</label>
          <select
            id="activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="">Select Activity</option>
            <option value="walking">Walking</option>
            <option value="jogging">Jogging</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="duration" className="block text-gray-700">Duration (minutes):</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
         
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Log Activity</button>
      </form>
    </div>
  );
};

export default Activity;



