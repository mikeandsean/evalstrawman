import React from 'react';

const SocialFactors = ({ userData, handleChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="friendships" className="block text-sm font-medium text-white">
          Close Friendships
        </label>
        <input
          type="number"
          id="friendships"
          name="friendships"
          value={userData.friendships}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="friendshipQuality" className="block text-sm font-medium text-white">
          Friendship Quality (1-10)
        </label>
        <input
          type="range" 
          min="1"
          max="10"
          id="friendshipQuality"
          name="friendshipQuality"
          value={userData.friendshipQuality}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <div className="flex justify-between text-xs px-2">
          <span>1</span>
          <span>10</span>
        </div>
      </div>

      <div>
        <label htmlFor="socialActivities" className="block text-sm font-medium text-white">
          Social Activities per Month
        </label>
        <input
          type="number"
          id="socialActivities"
          name="socialActivities"  
          value={userData.socialActivities}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      
      <div>
        <label htmlFor="familyRelationship" className="block text-sm font-medium text-white">
          Family Relationship Quality (1-10)
        </label>
        <input
          type="range"
          min="1" 
          max="10"
          id="familyRelationship"
          name="familyRelationship"
          value={userData.familyRelationship}
          onChange={handleChange} 
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <div className="flex justify-between text-xs px-2">
          <span>1</span> 
          <span>10</span>
        </div>
      </div>

      <div>
        <label htmlFor="familyActivities" className="block text-sm font-medium text-white">
          Family Activities per Month
        </label>
        <input
          type="number"
          id="familyActivities"
          name="familyActivities"
          value={userData.familyActivities}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"   
        />
      </div>

      <div>
        <label htmlFor="conflictFrequency" className="block text-sm font-medium text-white">
          Interpersonal Conflict Frequency per Month
        </label>
        <input
          type="number"
          id="conflictFrequency" 
          name="conflictFrequency"
          value={userData.conflictFrequency}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />  
      </div>

      <div>
        <label htmlFor="conflictResolution" className="block text-sm font-medium text-white">
          Conflict Resolution Skills (1-10)  
        </label>
        <input 
          type="range"
          min="1"
          max="10" 
          id="conflictResolution"
          name="conflictResolution" 
          value={userData.conflictResolution}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"  
        />
        <div className="flex justify-between text-xs px-2">
          <span>1</span>
          <span>10</span> 
        </div>
      </div>

      <div>
        <label htmlFor="peerPressure" className="block text-sm font-medium text-white">
          Susceptibility