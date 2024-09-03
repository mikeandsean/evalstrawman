import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('demographic');
  const [userData, setUserData] = useState({
    age: '',
    gender: '',
    familyType: '',
    socioeconomicStatus: '',
    exerciseRoutine: '',
    dailyActivity: '',
    sleepHours: '',
    sleepPatterns: '',
    phoneHours: '',
    familyFriction: '',
    friendMap: '',
    enemyMap: '',
    socialSuccess: '',
    personalityTest: '',
    selfDescription: '',
    independence: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const renderTab = (tabName) => {
    switch(tabName) {
      case 'demographic':
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
              <input type="number" id="age" name="age" value={userData.age} onChange={handleInputChange}
                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
              <select id="gender" name="gender" value={userData.gender} onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="familyType" className="block text-sm font-medium text-gray-700">Family Type</label>
              <select id="familyType" name="familyType" value={userData.familyType} onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option value="">Select family type</option>
                <option value="two_parent">Two Parent</option>
                <option value="single_parent">Single Parent</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="socioeconomicStatus" className="block text-sm font-medium text-gray-700">Socioeconomic Status</label>
              <select id="socioeconomicStatus" name="socioeconomicStatus" value={userData.socioeconomicStatus} onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option value="">Select status</option>
                <option value="low_income">Low Income</option>
                <option value="middle_class">Middle Class</option>
                <option value="high_income">High Income</option>
              </select>
            </div>
          </div>
        );
      case 'lifestyle':
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="exerciseRoutine" className="block text-sm font-medium text-gray-700">Describe your exercise routine</label>
              <textarea id="exerciseRoutine" name="exerciseRoutine" rows="3" value={userData.exerciseRoutine} onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            </div>
            <div>
              <label htmlFor="dailyActivity" className="block text-sm font-medium text-gray-700">How do you get activity throughout the day?</label>
              <textarea id="dailyActivity" name="dailyActivity" rows="3" value={userData.dailyActivity} onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            </div>
            <div>
              <label htmlFor="sleepPatterns" className="block text-sm font-medium text-gray-700">Describe your sleep patterns</label>
              <textarea id="sleepPatterns" name="sleepPatterns" rows="3" value={userData.sleepPatterns} onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            </div>
            <div>
              <label htmlFor="sleepHours" className="block text-sm font-medium text-gray-700">Average Sleep Hours</label>
              <input type="number" id="sleepHours" name="sleepHours" value={userData.sleepHours} onChange={handleInputChange}
                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
            </div>
            <div>
              <label htmlFor="phoneHours" className="block text-sm font-medium text-gray-700">Daily Phone Usage (hours)</label>
              <input type="number" id="phoneHours" name="phoneHours" value={userData.phoneHours} onChange={handleInputChange}
                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
            </div>
          </div>
        );
      case 'social':
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="familyFriction" className="block text-sm font-medium text-gray-700">Family Friction (1-10)</label>
              <input type="number" id="familyFriction" name="familyFriction" min="1" max="10" value={userData.familyFriction} onChange={handleInputChange}
                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
            </div>
            <div>
              <label htmlFor="friendMap" className="block text-sm font-medium text-gray-700">Describe your friend network</label>
              <textarea id="friendMap" name="friendMap" rows="3" value={userData.friendMap} onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            </div>
            <div>
              <label htmlFor="enemyMap" className="block text-sm font-medium text-gray-700">Describe any challenging relationships</label>
              <textarea id="enemyMap" name="enemyMap" rows="3" value={userData.enemyMap} onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            </div>
            <div>
              <label htmlFor="socialSuccess" className="block text-sm font-medium text-gray-700">Social Success (1-10)</label>
              <input type="number" id="socialSuccess" name="socialSuccess" min="1" max="10" value={userData.socialSuccess} onChange={handleInputChange}
                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
            </div>
          </div>
        );
      case 'personality':
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="personalityTest" className="block text-sm font-medium text-gray-700">OCEAN Personality Test Results</label>
              <textarea id="personalityTest" name="personalityTest" rows="5" value={userData.personalityTest} onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Enter your OCEAN test results here..."></textarea>
            </div>
            <div>
              <label htmlFor="selfDescription" className="block text-sm font-medium text-gray-700">How would you describe yourself?</label>
              <textarea id="selfDescription" name="selfDescription" rows="3" value={userData.selfDescription} onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            </div>
            <div>
              <label htmlFor="independence" className="block text-sm font-medium text-gray-700">How independent are you?</label>
              <textarea id="independence" name="independence" rows="3" value={userData.independence} onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Mike's Evaluation Tool</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex justify-between">
                  {['demographic', 'lifestyle', 'social', 'personality'].map((tab) => (
                    <button
                      key={tab}
                      className={`px-2 py-1 rounded ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
                {renderTab(activeTab)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;