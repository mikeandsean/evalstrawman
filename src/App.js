import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DemographicInfo from './components/DemographicInfo';
import LifestyleFactors from './components/LifestyleFactors';
import PersonalityFactors from './components/PersonalityFactors';
import SocialFactors from './components/SocialFactors';

function App() {
  const [userData, setUserData] = useState({
    // Demographic Info
    age: '',
    gender: '',
    genderIdentity: '',
    ethnicity: '',
    race: '',
    familyStructure: '',
    familyDetails: '',
    siblings: '',
    birthOrder: '',
    socioeconomicStatus: '',
    parentEducation: '',
    primaryLanguage: '',
    otherLanguages: '',
    residentialArea: '',
    schoolType: '',
    specialEducation: '',
    immigrationStatus: '',
    additionalDemographics: '',

    // Lifestyle Factors
    sleepHours: '',
    sleepQuality: 5,
    sleepComments: '',
    exerciseFrequency: '',
    exerciseDuration: '',
    exerciseTypes: '',
    screenTime: '',
    screenTimeComments: '',
    lifestyleGoals: '',
    digitalActivities: '',
    nonDigitalHobbies: '',

    // Personality Factors
    openness: 5,
    conscientiousness: 5,
    extraversion: 5,
    agreeableness: 5,
    neuroticism: 5,
    personalityObservations: '',
    copingMechanisms: '',
    stressors: '',
    digitalPersona: '',
    technologyAttitude: '',

    // Social Factors
    closeFriendships: '',
    friendshipQuality: 5,
    friendshipObservations: '',
    familyRelationshipQuality: 5,
    familyDynamics: '',
    peerIssues: '',
    socialMediaUsage: '',
    socialGoals: '',
    phoneUsage: '',
    screenTimeImpact: '',
    screenTimeStrategies: '',
    parentCommunication: '',
    digitalGrounding: '',
    peerPressure: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Assessment data:', userData);
    // Here you would typically send the data to a server
    alert('Assessment submitted successfully!');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Comprehensive Evaluation Tool</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Tabs defaultValue="demographic" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="demographic">Demographics</TabsTrigger>
                <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
                <TabsTrigger value="personality">Personality</TabsTrigger>
                <TabsTrigger value="social">Social</TabsTrigger>
              </TabsList>
              <TabsContent value="demographic">
                <DemographicInfo userData={userData} handleChange={handleChange} />
              </TabsContent>
              <TabsContent value="lifestyle">
                <LifestyleFactors userData={userData} handleChange={handleChange} />
              </TabsContent>
              <TabsContent value="personality">
                <PersonalityFactors userData={userData} handleChange={handleChange} />
              </TabsContent>
              <TabsContent value="social">
                <SocialFactors userData={userData} handleChange={handleChange} />
              </TabsContent>
            </Tabs>
            <div className="mt-6">
              <Button type="submit" className="w-full">Submit Assessment</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
