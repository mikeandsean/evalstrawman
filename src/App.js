import React, { useState } from 'react';
import DemographicInfo from './components/DemographicInfo';
import LifestyleFactors from './components/LifestyleFactors';
import SocialFactors from './components/SocialFactors';
import PersonalityFactors from './components/PersonalityFactors';

function App() {
  const [activeTab, setActiveTab] = useState('demographic');
  const [userData, setUserData] = useState({
    age: '',
    gender: '',
    ethnicity: '',
    familyStructure: '',
    siblings: '',
    socioeconomicStatus: '',
    sleep: '',
    sleepQuality: '',
    exerciseFrequency: '',
    exerciseDuration: '',
    exerciseTypes: '',
    dailySteps: '',
    screenTime: '',
    socialMedia: '',
    hobbyTime: '',
    friendships: '',
    friendshipQuality: '',
    socialActivities: '',
    familyRelationship: '',
    familyActivities: '',
    conflictFrequency: '',
    conflictResolution: '',
    peerPressure: '',
    personalityType: '',
    introversion: '',
    openness: '',
    conscientiousness: '',
    agreeableness: '',
    neuroticism: '',
    personalityTraits: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const renderTab = (tabName) => {
    switch (tabName) {
      case 'demographic':
        return <DemographicInfo userData={userData} handleChange={handleInputChange} />;
      case 'lifestyle':
        return <LifestyleFactors userData={userData} handleChange={handleInputChange} />;
      case 'social':
        return <SocialFactors userData={userData} handleChange={handleInputChange} />;
      case 'personality':
        return <PersonalityFactors userData={userData} handleChange={handleInputChange} />;
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