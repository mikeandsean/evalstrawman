// LifestyleFactors.js
import React from 'react';
import { Input, Textarea } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

const LifestyleFactors = ({ userData, handleChange }) => {
  const handleSliderChange = (name, value) => {
    handleChange({ target: { name, value: value[0] } });
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="sleepHours">Average hours of sleep per night</Label>
        <Input
          type="number"
          id="sleepHours"
          name="sleepHours"
          value={userData.sleepHours}
          onChange={handleChange}
          placeholder="Enter average sleep hours"
          min={0}
          max={24}
        />
      </div>
      <div>
        <Label htmlFor="sleepQuality">Sleep quality (1-10)</Label>
        <Slider
          id="sleepQuality"
          name="sleepQuality"
          min={1}
          max={10}
          step={1}
          value={[userData.sleepQuality || 1]} // Added fallback value
          onValueChange={(value) => handleSliderChange('sleepQuality', value)}
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>Poor</span>
          <span>Excellent</span>
        </div>
      </div>
      <div>
        <Label htmlFor="sleepComments">Observations about sleep patterns</Label>
        <Textarea
          id="sleepComments"
          name="sleepComments"
          value={userData.sleepComments}
          onChange={handleChange}
          placeholder="Enter any observations about sleep patterns and quality"
          rows={3}
        />
      </div>
      <div>
        <Label htmlFor="exerciseFrequency">Exercise frequency (days per week)</Label>
        <Input
          type="number"
          id="exerciseFrequency"
          name="exerciseFrequency"
          value={userData.exerciseFrequency}
          onChange={handleChange}
          placeholder="Enter exercise frequency"
          min={0}
          max={7}
        />
      </div>
      <div>
        <Label htmlFor="exerciseDuration">Average exercise duration (minutes per session)</Label>
        <Input
          type="number"
          id="exerciseDuration"
          name="exerciseDuration"
          value={userData.exerciseDuration}
          onChange={handleChange}
          placeholder="Enter average exercise duration"
          min={0}
        />
      </div>
      <div>
        <Label htmlFor="exerciseTypes">Types of exercise</Label>
        <Textarea
          id="exerciseTypes"
          name="exerciseTypes"
          value={userData.exerciseTypes}
          onChange={handleChange}
          placeholder="List the types of exercise typically done"
          rows={3}
        />
      </div>
      <div>
        <Label htmlFor="screenTime">Average daily screen time (hours)</Label>
        <Input
          type="number"
          id="screenTime"
          name="screenTime"
          value={userData.screenTime}
          onChange={handleChange}
          placeholder="Enter average daily screen time"
          min={0}
        />
      </div>
      <div>
        <Label htmlFor="screenTimeComments">Screen time observations</Label>
        <Textarea
          id="screenTimeComments"
          name="screenTimeComments"
          value={userData.screenTimeComments}
          onChange={handleChange}
          placeholder="Enter observations about screen time usage and impact"
          rows={3}
        />
      </div>
      <div>
        <Label htmlFor="lifestyleGoals">Lifestyle improvement goals</Label>
        <Textarea
          id="lifestyleGoals"
          name="lifestyleGoals"
          value={userData.lifestyleGoals}
          onChange={handleChange}
          placeholder="List goals for improving lifestyle"
          rows={3}
        />
      </div>
    </div>
  );
};

export default LifestyleFactors;
