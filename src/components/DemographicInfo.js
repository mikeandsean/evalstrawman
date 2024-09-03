import React from 'react';

const DemographicInfo = ({ userData, handleChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="age" className="block text-sm font-medium text-white">
          Age
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={userData.age}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="gender" className="block text-sm font-medium text-white">
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          value={userData.gender}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="nonbinary">Non-binary</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="ethnicity" className="block text-sm font-medium text-white">
          Ethnicity
        </label>
        <input
          type="text"
          id="ethnicity"
          name="ethnicity"
          value={userData.ethnicity}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="familyStructure" className="block text-sm font-medium text-white">
          Family Structure
        </label>
        <select
          id="familyStructure"
          name="familyStructure"
          value={userData.familyStructure}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select...</option>
          <option value="twoParent">Two-parent household</option>
          <option value="singleParent">Single-parent household</option> 
          <option value="guardian">Guardian(s)</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="siblings" className="block text-sm font-medium text-white">
          Number of Siblings
        </label>
        <input
          type="number"
          id="siblings"
          name="siblings"
          value={userData.siblings}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      
      <div>
        <label htmlFor="socioeconomicStatus" className="block text-sm font-medium text-white">
          Socioeconomic Status
        </label>
        <select
          id="socioeconomicStatus"
          name="socioeconomicStatus"
          value={userData.socioeconomicStatus}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select...</option>
          <option value="low">Low income</option>
          <option value="lowMid">Low-middle income</option>
          <option value="mid">Middle income</option>
          <option value="highMid">Upper-middle income</option>
          <option value="high">High income</option>
        </select>
      </div>
            
    </div>
  );
};

export default DemographicInfo;