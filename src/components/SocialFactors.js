import React, { useState } from 'react';
import { Input, Textarea } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

const SocialFactors = ({ userData, handleChange }) => {
  const handleSliderChange = (name, value) => {
    handleChange({ target: { name, value: value[0] } });
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="closeFriendships">Number of close friendships</Label>
        <Input
          type="number"
          id="closeFriendships"
          name="closeFriendships"
          value={userData.closeFriendships}
          onChange={handleChange}
          placeholder="Enter number of close friendships"
        />
      </div>
      <div>
        <Label htmlFor="friendshipQuality">Overall friendship quality (1-10)</Label>
        <Slider
          id="friendshipQuality"
          name="friendshipQuality"
          min={1}
          max={10}
          step={1}
          value={[userData.friendshipQuality]}
          onValueChange={(value) => handleSliderChange('friendshipQuality', value)}
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>Poor</span>
          <span>Excellent</span>
        </div>
      </div>
      <div>
        <Label htmlFor="friendshipObservations">Friendship observations</Label>
        <Textarea
          id="friendshipObservations"
          name="friendshipObservations"
          value={userData.friendshipObservations}
          onChange={handleChange}
          placeholder="Describe observations about friendships and social interactions"
          rows={4}
        />
      </div>
      <div>
        <Label htmlFor="familyRelationshipQuality">Family relationship quality (1-10)</Label>
        <Slider
          id="familyRelationshipQuality"
          name="familyRelationshipQuality"
          min={1}
          max={10}
          step={1}
          value={[userData.familyRelationshipQuality]}
          onValueChange={(value) => handleSliderChange('familyRelationshipQuality', value)}
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>Poor</span>
          <span>Excellent</span>
        </div>
      </div>
      <div>
        <Label htmlFor="familyDynamics">Family dynamics observations</Label>
        <Textarea
          id="familyDynamics"
          name="familyDynamics"
          value={userData.familyDynamics}
          onChange={handleChange}
          placeholder="Describe significant family dynamics or issues observed"
          rows={4}
        />
      </div>
      <div>
        <Label htmlFor="peerIssues">Significant peer issues</Label>
        <Textarea
          id="peerIssues"
          name="peerIssues"
          value={userData.peerIssues}
          onChange={handleChange}
          placeholder="Describe any significant issues with peers or social groups"
          rows={4}
        />
      </div>
      <div>
        <Label htmlFor="socialMediaUsage">Social media usage patterns</Label>
        <Textarea
          id="socialMediaUsage"
          name="socialMediaUsage"
          value={userData.socialMediaUsage}
          onChange={handleChange}
          placeholder="Describe social media usage patterns and their impact"
          rows={4}
        />
      </div>
      <div>
        <Label htmlFor="phoneUsage">Phone usage observations</Label>
        <Textarea
          id="phoneUsage"
          name="phoneUsage"
          value={userData.phoneUsage}
          onChange={handleChange}
          placeholder="Describe phone usage patterns and any related concerns"
          rows={4}
        />
      </div>
      <div>
        <Label htmlFor="screenTimeImpact">Impact of screen time on social life</Label>
        <Textarea
          id="screenTimeImpact"
          name="screenTimeImpact"
          value={userData.screenTimeImpact}
          onChange={handleChange}
          placeholder="Describe how screen time affects social interactions and relationships"
          rows={4}
        />
      </div>
      <div>
        <Label htmlFor="screenTimeStrategies">Strategies for managing screen time</Label>
        <Textarea
          id="screenTimeStrategies"
          name="screenTimeStrategies"
          value={userData.screenTimeStrategies}
          onChange={handleChange}
          placeholder="List any strategies attempted to manage screen time"
          rows={4}
        />
      </div>
      <div>
        <Label htmlFor="socialGoals">Social improvement goals</Label>
        <Textarea
          id="socialGoals"
          name="socialGoals"
          value={userData.socialGoals}
          onChange={handleChange}
          placeholder="List goals for improving social life and relationships"
          rows={4}
        />
      </div>
      <div>
        <Label htmlFor="parentCommunication">Parent-child communication about digital usage</Label>
        <Textarea
          id="parentCommunication"
          name="parentCommunication"
          value={userData.parentCommunication}
          onChange={handleChange}
          placeholder="Describe the nature of parent-child communication regarding digital usage"
          rows={4}
        />
      </div>
      <div>
        <Label htmlFor="digitalGrounding">Experience with 'digital grounding'</Label>
        <Textarea
          id="digitalGrounding"
          name="digitalGrounding"
          value={userData.digitalGrounding}
          onChange={handleChange}
          placeholder="Describe any experiences with 'digital grounding' or significant restrictions on device usage"
          rows={4}
        />
      </div>
      <div>
        <Label htmlFor="peerPressure">Digital peer pressure</Label>
        <Textarea
          id="peerPressure"
          name="peerPressure"
          value={userData.peerPressure}
          onChange={handleChange}
          placeholder="Describe any observed peer pressure related to digital device usage or social media participation"
          rows={4}
        />
      </div>
    </div>
  );
};

export default SocialFactors;

// Add this to your App.js state initialization
const [userData, setUserData] = useState({
  // ... (previous state)
  phoneUsage: '',
  screenTimeImpact: '',
  screenTimeStrategies: '',
  parentCommunication: '',
  digitalGrounding: '',
  peerPressure: '',
});

// LifestyleFactors.js (additional fields)
<div>
  <Label htmlFor="digitalActivities">Primary digital activities</Label>
  <Textarea
    id="digitalActivities"
    name="digitalActivities"
    value={userData.digitalActivities}
    onChange={handleChange}
    placeholder="List the primary digital activities engaged in (e.g., social media, gaming, content creation)"
    rows={4}
  />
</div>
<div>
  <Label htmlFor="nonDigitalHobbies">Non-digital hobbies and interests</Label>
  <Textarea
    id="nonDigitalHobbies"
    name="nonDigitalHobbies"
    value={userData.nonDigitalHobbies}
    onChange={handleChange}
    placeholder="Describe hobbies and interests that don't involve digital devices"
    rows={4}
  />
</div>

// PersonalityFactors.js (additional fields)
<div>
  <Label htmlFor="digitalPersona">Digital persona observations</Label>
  <Textarea
    id="digitalPersona"
    name="digitalPersona"
    value={userData.digitalPersona}
    onChange={handleChange}
    placeholder="Describe any differences observed between online and offline personality"
    rows={4}
  />
</div>
<div>
  <Label htmlFor="technologyAttitude">Attitude towards technology</Label>
  <Textarea
    id="technologyAttitude"
    name="technologyAttitude"
    value={userData.technologyAttitude}
    onChange={handleChange}
    placeholder="Describe the individual's general attitude towards technology and digital devices"
    rows={4}
  />
</div>
