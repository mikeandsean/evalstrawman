import React from 'react';

const PersonalityFactors = ({ userData, handleChange }) => {
  return (
    <div className="space-y-6">
      {/* Big Five Personality Test */}
      <div>
        <p className="text-sm text-gray-700">
          Take the <a href="https://bigfive-test.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">Big Five Personality Test</a> and enter your results below:
        </p>
      </div>

      {/* Personality Traits */}  
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="independence" className="block text-sm font-medium text-gray-700">
            Independence (1-10)
          </label>
          <input
            type="range"
            min="1"
            max="10"
            id="independence"
            name="independence" 
            value={userData.independence}
            onChange={handleChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"  
          />
          <div className="flex justify-between text-sm text-gray-600 px-2">
            <span>1</span> 
            <span>10</span>
          </div>  
        </div>
        <div>
          <label htmlFor="resilience" className="block text-sm font-medium text-gray-700">
            Resilience (1-10)
          </label>
          <input  
            type="range"
            min="1" 
            max="10"
            id="resilience"
            name="resilience"
            value={userData.resilience} 
            onChange={handleChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          /> 
          <div className="flex justify-between text-sm text-gray-600 px-2">
            <span>1</span>
            <span>10</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="openness" className="block text-sm font-medium text-gray-700">
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
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600 px-2">  
            <span>1</span>
            <span>10</span>  
          </div>
        </div>
        <div>  
          <label htmlFor="conscientiousness" className="block text-sm font-medium text-gray-700">
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
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600 px-2">
            <span>1</span> 
            <span>10</span>
          </div> 
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="extraversion" className="block text-sm font-medium text-gray-700">  
            Extraversion (1-10)
          </label>
          <input 
            type="range"
            min="1" 
            max="10"
            id="extraversion" 
            name="extraversion"
            value={userData.extraversion}
            onChange={handleChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
/>
<div className="flex justify-between text-sm text-gray-600 px-2">
<span>1</span>
<span>10</span>
</div>
</div>
<div>
<label htmlFor="agreeableness" className="block text-sm font-medium text-gray-700">
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
         className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
       />
<div className="flex justify-between text-sm text-gray-600 px-2">
<span>1</span>
<span>10</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
    <div>
      <label htmlFor="neuroticism" className="block text-sm font-medium text-gray-700">
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
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="flex justify-between text-sm text-gray-600 px-2">
        <span>1</span>
        <span>10</span>
      </div>
    </div>
  </div>

  {/* Friend Observations */}
  <div>
    <label htmlFor="friendObservations" className="block text-sm font-medium text-gray-700">
      What do your friends mostly say about you?
    </label>
    <textarea
      id="friendObservations"
      name="friendObservations"
      rows={3}
      value={userData.friendObservations}
      onChange={handleChange}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      placeholder="Enter observations your friends have made about your personality"
    />
  </div>
</div>
);
};
export default PersonalityFactors