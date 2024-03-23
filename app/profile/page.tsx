"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Profile = () => {
    const router = useRouter();
  // State variables to store user input
  const [fitnessGoals, setFitnessGoals] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [healthMetrics, setHealthMetrics] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5001/api/profiles', {
        fitnessGoals,
        activityLevel,
        healthMetrics,
      });
      alert('Profile saved');
      console.log('Profile saved:', response.data);
      router.push('/activity');
    } catch (error) {
      console.log('Error saving profile:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fitness-goals" className="block text-gray-700">Fitness Goals:</label>
          <input
            type="text"
            id="fitness-goals"
            value={fitnessGoals}
            onChange={(e) => setFitnessGoals(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="activity-level" className="block text-gray-700">Activity Level:</label>
          <select
            id="activity-level"
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="">Select Activity Level</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="health-metrics" className="block text-gray-700">Health Metrics:</label>
          <textarea
            id="health-metrics"
            value={healthMetrics}
            onChange={(e) => setHealthMetrics(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Profile;

