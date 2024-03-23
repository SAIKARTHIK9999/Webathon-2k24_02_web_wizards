"use client"
import React, { useState } from 'react';

type FoodItems = {
  [key: string]: { calories: number; protein: number; carbs: number; fat: number };
};

const Nutrition = () => {
  const [foodItem, setFoodItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fat, setFat] = useState('');

  const foodItems: FoodItems = {
    rice: { calories: 408, protein: 8.4, carbs: 89, fat: 0.6 },
    // Add more food items as needed
  };

  const calculateNutrition = () => {
    if (foodItems.hasOwnProperty(foodItem)) {
      const item = foodItems[foodItem];
      const quantityInGrams = parseFloat(quantity);
      const calculatedCalories = ((item.calories * quantityInGrams) / 100).toFixed(2);
      const calculatedProtein = ((item.protein * quantityInGrams) / 100).toFixed(2);
      const calculatedCarbs = ((item.carbs * quantityInGrams) / 100).toFixed(2);
      const calculatedFat = ((item.fat * quantityInGrams) / 100).toFixed(2);

      setCalories(calculatedCalories);
      setProtein(calculatedProtein);
      setCarbs(calculatedCarbs);
      setFat(calculatedFat);
    } else {
      setCalories('');
      setProtein('');
      setCarbs('');
      setFat('');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    calculateNutrition();
  };

  const handleFoodItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodItem(e.target.value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Nutritional Tracking</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="foodItem" className="block text-gray-700">Food Item:</label>
          <input
            type="text"
            id="foodItem"
            value={foodItem}
            onChange={handleFoodItemChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700">Quantity (grams):</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="calories" className="block text-gray-700">Calories:</label>
          <input
            type="text"
            id="calories"
            value={calories}
            readOnly
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="protein" className="block text-gray-700">Protein (g):</label>
          <input
            type="text"
            id="protein"
            value={protein}
            readOnly
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="carbs" className="block text-gray-700">Carbs (g):</label>
          <input
            type="text"
            id="carbs"
            value={carbs}
            readOnly
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fat" className="block text-gray-700">Fat (g):</label>
          <input
            type="text"
            id="fat"
            value={fat}
            readOnly
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Calculate Nutritional Information</button>
        </form>
      </div>
    );
  };
  
  export default Nutrition;
  




