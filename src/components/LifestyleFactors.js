import React from 'react';

const LifestyleFactors = ({ userData, handleChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="sleep" className="block text-sm font-medium text-white">
          Average Hours of Sleep per Night
        </label>
        <input 
          type="number"
          step="0.5"
          id="sleep"
          name="sleep"
          value={userData.sleep}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="sleepQuality" className="block text-sm font-medium text-white">
          Sleep Quality (1-10)
        </label>
        <input
          type="range"
          min="1"
          max="10"
          id="sleepQuality"
          name="sleepQuality"
          value={userData.sleepQuality}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <div className="flex justify-between text-xs px-2">
          <span>1</span>
          <span>10</span>
        </div>
      </div>

      <div>
        <label htmlFor="exerciseFrequency" className="block text-sm font-medium text-white">
          Exercise Frequency (Days per Week) 
        </label>
        <input
          type="number" 
          id="exerciseFrequency"
          name="exerciseFrequency"
          min="0"
          max="7"
          value={userData.exerciseFrequency}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="exerciseDuration" className="block text-sm font-medium text-white">
          Average Exercise Duration per Session (Minutes)
        </label>
        <input
          type="number"
          id="exerciseDuration" 
          name="exerciseDuration"
          value={userData.exerciseDuration}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
        />
      </div>

      <div>
        <label htmlFor="exerciseTypes" className="block text-sm font-medium text-white">
          Types of Exercise
        </label>
        <textarea
          id="exerciseTypes"
          name="exerciseTypes"
          value={userData.exerciseTypes}
          onChange={handleChange}
          rows="3"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="List the types of exercise you typically do"
        ></textarea>
      </div>

      <div>
        <label htmlFor="dailySteps" className="block text-sm font-medium text-white">
          Average Daily Steps
        </label>
        <input
          type="number"
          id="dailySteps"
          name="dailySteps" 
          value={userData.dailySteps}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="screenTime" className="block text-sm font-medium text-white">
          Average Daily Screen Time (Hours)
        </label>
        <input
          type="number"
          step="0.5"
          id="screenTime"
          name="screenTime"
          value={userData.screenTime}
          onChange={handleChange} 
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="socialMedia" className="block text-sm font-medium text-white">
          Social Media Usage (Hours per Day)
        </label>
        <input
          type="number" 
          step="0.5"
          id="socialMedia"
          name="socialMedia"
          value={userData.socialMedia}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"  
        />
      </div>

      <div>
        <label htmlFor="hobbyTime" className="block text-sm font-medium text-white">
          Time Spent on Hobbies/Interests (Hours per Week)
        </label>
        <input 
          type="number"
          id="hobbyTime"
          name="hobbyTime"  
          value={userData.hobbyTime}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

    </div>
  );
};

export default LifestyleFactors;