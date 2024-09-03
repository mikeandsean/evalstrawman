import React from 'react';

const PersonalityFactors = ({ userData, handleChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="personalityType" className="block text-sm font-medium text-white">
          Personality Type (e.g., MBTI, Big 5) 
        </label>
        <input
          type="text"
          id="personalityType"
          name="personalityType"
          value={userData.personalityType}
          onChange={handleChange} 
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="introversion" className="block text-sm font-medium text-white">
          Introversion vs. Extroversion (1-10)
        </label>
        <input
          type="range"
          min="1"
          max="10"
          id="introversion"
          name="introversion"
          value={userData.introversion}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <div className="flex justify-between text-xs px-2">
          <span>Introversion</span>
          <span>Extroversion</span>
        </div>
      </div>

      <div>
        <label htmlFor="openness" className="block text-sm font-medium text-white">
          Openness (1-10)
        </label>
        <input
          type="range" 
          min="1"
          max="10"
          id="openness"
          name="openness"
          value={userData.openness}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"  
        />
        <div className="flex justify-between text-xs px-2">
          <span>1</span>
          <span>10</span>
        </div>
      </div>

      <div>
        <label htmlFor="conscientiousness" className="block text-sm font-medium text-white">
          Conscientiousness (1-10)
        </label>
        <input
          type="range"
          min="1" 
          max="10"
          id="conscientiousness"
          name="conscientiousness"
          value={userData.conscientiousness}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <div className="flex justify-between text-xs px-2">
          <span>1</span>
          <span>10</span>
        </div> 
      </div>

      <div>
        <label htmlFor="agreeableness" className="block text-sm font-medium text-white">
          Agreeableness (1-10)
        </label>  
        <input
          type="range"
          min="1"
          max="10"
          id="agreeableness"
          name="agreeableness"
          value={userData.agreeableness} 
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <div className="flex justify-between text-xs px-2">
          <span>1</span> 
          <span>10</span>
        </div>
      </div>

      <div>  
        <label htmlFor="neuroticism" className="block text-sm font-medium text-white">
          Neuroticism (1-10)
        </label>
        <input  
          type="range"
          min="1"
          max="10"
          id="neuroticism"
          name="neuroticism"
          value={userData.neuroticism}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <div className="flex justify-between text-xs px-2">
          <span>1</span>
          <span>10</span>  
        </div>
      </div>

      <div>
        <label htmlFor="personalityTraits" className="block text-sm font-medium text-white">
          Other Key Personality Traits
        </label>
        <textarea
          id="personalityTraits"
          name="personalityTraits" 
          value={userData.personalityTraits}
          onChange={handleChange}
          rows="3"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="List any other notable personality traits"
        ></textarea>
      </div>
      
    </div>
  );
};

export default PersonalityFactors;