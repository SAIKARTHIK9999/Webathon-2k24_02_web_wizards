"use client"
import React, { useState } from 'react';

const Goals = () => {
  const [goal, setGoal] = useState('');
  const [progress, setProgress] = useState(0);

  const handleGoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGoal(e.target.value);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(parseInt(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can handle saving the goal and progress data
    console.log('Goal:', goal);
    console.log('Progress:', progress);
    // Optionally, you can reset the form fields after submission
    setGoal('');
    setProgress(0);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Set Fitness Goals</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="goal" className="block text-gray-700">Goal:</label>
          <input
            type="text"
            id="goal"
            value={goal}
            onChange={handleGoalChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="progress" className="block text-gray-700">Progress:</label>
          <input
            type="number"
            id="progress"
            value={progress}
            onChange={handleProgressChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Save Goal</button>
      </form>
    </div>
  );
};

export default Goals;

