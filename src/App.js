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
    familyFriction: '5',
    familyFrictionDetails: '',
    friendFriction: '5',
    friendFrictionDetails: '',
    socialSuccess: '5',
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
              <label htmlFor="age" className="block text-sm font-medium text-white">Age</label>
              <input type="number" id="age" name="age" value={userData.age} onChange={handleInputChange}
                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-white focus:ring focus:ring-white focus:ring-opacity-50 bg-gray-700 text-white"
                     required />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-white">Gender</label>
              <select id="gender" name="gender" value={userData.gender} onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-white focus:ring focus:ring-white focus:ring-opacity-50 bg-gray-700 text-white"
                      required>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="familyType" className="block text-sm font-medium text-white">Family Type</label>
              <select id="familyType" name="familyType" value={userData.familyType} onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-white focus:ring focus:ring-white focus:ring-opacity-50 bg-gray-700 text-white"
                      required>
                <option value="">Select family type</option>
                <option value="two_parent">Two Parent</option>
                <option value="single_parent">Single Parent</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="socioeconomicStatus" className="block text-sm font-medium text-white">Socioeconomic Status</label>
              <select id="socioeconomicStatus" name="socioeconomicStatus" value={userData.socioeconomicStatus} onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-white focus:ring focus:ring-white focus:ring-opacity-50 bg-gray-700 text-white"
                      required>
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
              <label htmlFor="exerciseRoutine" className="block text-sm font-medium text-white">Describe your exercise routine</label>
              <textarea id="exerciseRoutine" name="exerciseRoutine" rows="3" value={userData.exerciseRoutine} onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-white focus:ring focus:ring-white focus:ring-opacity-50 bg-gray-700 text-white"></textarea>
            </div>
            <div>
              <label htmlFor="dailyActivity" className="block text-sm font-medium text-white">How do you get activity throughout the day?</label>
              <textarea id="dailyActivity" name="dailyActivity" rows="3" value={userData.dailyActivity} onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-white focus:ring focus:ring-white focus:ring-opacity-50 bg-gray-700 text-white"></textarea>
            </div>
            <div>
              <label htmlFor="sleepPatterns" className="block text-sm font-medium text-white">Describe your sleep patterns</label>
              <textarea id="sleepPatterns" name="sleepPatterns" rows="3" value={userData.sleepPatterns} onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-white focus:ring focus:ring-white focus:ring-opacity-50 bg-gray-700 text-white"></textarea>
            </div>
            <div>
              <label htmlFor="sleepHours" className="block text-sm font-medium text-white">Average Sleep Hours</label>
              <input type="number" id="sleepHours" name="sleepHours" value={userData.sleepHours} onChange={handleInputChange}
                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-white focus:ring focus:ring-white focus:ring-opacity-50 bg-gray-700 text-white"/>
            </div>
            <div>
              <label htmlFor="phoneHours" className="block text-sm font-medium text-white">Daily Phone Usage (hours)</label>
              <input type="number" id="phoneHours" name="phoneHours" value={userData.phoneHours} onChange={handleInputChange}
                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-white focus:ring focus:ring-white focus:ring-opacity-50 bg-gray-700 text-white"/>
            </div>
          </div>
        );
      case 'social':
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="familyFriction" className="block text-sm font-medium text-white">
                Family Friction (1-10): {userData.familyFriction}
              </label>
              <input type="range" id="familyFriction" name="familyFriction" min="1" max="10" value={userData.familyFriction} onChange={handleInputChange}
                     className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring focus:ring-white"
                     aria-label="Family Friction Scale"/>
              <textarea id="familyFrictionDetails" name="familyFrictionDetails" rows="3" value={userData.familyFrictionDetails} onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-white focus:ring focus:ring-white focus:ring-opacity-50 bg-gray-700 text-white"
                        placeholder="How's it going in your family?"></textarea>
            </div>
            <div>
              <label htmlFor="friendFriction" className="block text-sm font-medium text-white">
                Friendship Status (1-10): {userData.friendFriction}
              </label>
              <input type="range" id="friendFriction" name="friendFriction" min="1" max="10" value={userData.friendFriction} onChange={handleInputChange}
                     className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring focus:ring-white"
                     aria-label="Friendship Status Scale"/>
              <textarea id="friendFrictionDetails" name="friendFrictionDetails" rows="3" value={userData.friendFrictionDetails} onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-white focus:ring focus:ring-white focus:ring-opacity-50 bg-gray-700 text-white"
                        placeholder="How's it going with your friends?"></textarea>
            </div>
            <div>
              <label htmlFor="socialSuccess" className="block text-sm font-medium text-white">
                Social Success (1-10): {userData.socialSuccess}
              </label>
              <input type="range" id="socialSuccess" name="socialSuccess" min="1" max="10" value={userData.socialSuccess} onChange={handleInputChange}
                     className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring focus:ring-white"
                     aria-label="Social Success Scale"/>
            </div>
          </div>
        );
      case 'personality':
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="personalityTestLink" className="block text-sm font-medium text-white">Take the Personality Test</label>
              <a href="https://bigfive-test.com/" target="_blank" rel="noopener noreferrer"
                 className="text-blue-300 underline">Click here to take the OCEAN Personality Test</a>
            </div>
            <div>
              <label htmlFor="personalityTest" className="block text-sm font-medium text-white">OCEAN Personality Test Results</label>
              <textarea id="personalityTest" name="personalityTest" rows="5" value={userData.personalityTest} onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-white focus:ring focus:ring-white focus:ring-opacity-50 bg-gray-700 text-white"
                        placeholder="Enter your OCEAN test results here..."></textarea>
            </div>
            <div>
              <label htmlFor="selfDescription" className="block text-sm font-medium text-white">How would you describe yourself?</label>
              <textarea id="selfDescription" name="selfDescription" rows="3" value={userData.selfDescription} onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-white focus:ring focus:ring-white focus:ring-opacity-50 bg-gray-700 text-white"></textarea>
            </div>
            <div>
              <label htmlFor="independence" className="block text-sm font-medium text-white">How independent are you?</label>
              <textarea id="independence" name="independence" rows="3" value={userData.independence} onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-white focus:ring focus:ring-white focus:ring-opacity-50 bg-gray-700 text-white"></textarea>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', userData);
    // Here you would typically send the data to a server
    alert('Assessment submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-black shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-3xl font-bold text-white">Assessment</h1>
            </div>
            <div className="divide-y divide-gray-700">
              <div className="py-8 text-base leading-6 space-y-4 text-white sm:text-lg sm:leading-7">
                <div className="flex justify-between">
                  {['demographic', 'lifestyle', 'social', 'personality'].map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      className={`px-2 py-1 rounded ${activeTab === tab ? 'bg-gray-700 text-white' : 'bg-gray-900 text-gray-400'}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
                {renderTab(activeTab)}
              </div>
            </div>
            <div className="mt-6">
              <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Submit Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default App;