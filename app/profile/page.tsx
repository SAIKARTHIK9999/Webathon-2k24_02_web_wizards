"use client"
import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';

// Define the interface for the profile object
interface Profile {
  _id: string;
  fitnessGoals: string;
  activityLevel: string;
  healthMetrics: string;
}


const Profile = () => {
    const router = useRouter();
  // State variables to store user input
  const [fitnessGoals, setFitnessGoals] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [healthMetrics, setHealthMetrics] = useState('');
  const [profiles, setProfiles] = useState<Profile[]>([]); 

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

    // Function to fetch profiles
    const fetchProfiles = async () => {
      try {
        const response: AxiosResponse<Profile[]> = await axios.get('http://localhost:5001/api/profiles');
        setProfiles(response.data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };
  
    useEffect(() => {
      fetchProfiles();
    }, []); 

  return (<>
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

    <div className='mt-8'>
    {/* Display submitted profiles */}
    {profiles.length > 0 && (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Submitted Profiles</h2>
          {profiles.map((profile) => (
            <div key={profile._id} className="mb-4">
              <p><strong>Fitness Goals:</strong> {profile.fitnessGoals}</p>
              <p><strong>Activity Level:</strong> {profile.activityLevel}</p>
              <p><strong>Health Metrics:</strong> {profile.healthMetrics}</p>
              <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Learn More
        </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Profile;

