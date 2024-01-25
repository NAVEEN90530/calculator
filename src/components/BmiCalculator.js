// BmiCalculator.jsx

import React, { useState } from 'react';
import './BmiCalculator.css';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [weightStatus, setWeightStatus] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert height to meters
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);

      // Determine weight status
      if (bmiValue < 18.5) {
        setWeightStatus('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setWeightStatus('Normal Weight');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setWeightStatus('Overweight');
      } else {
        setWeightStatus('Obese');
      }
    }
  };

  return (
    <div className="bmi-calculator-container">
      <h2 className="title">BMI Calculator</h2>
      <label className="label">
        Weight (kg):
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="input-field"
        />
      </label>
      <br />
      <label className="label">
        Height (cm):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="input-field"
        />
      </label>
      <br />
      <button onClick={calculateBMI} className="calculate-button ">
        Calculate BMI
      </button>
      {bmi && (
        <div className="result-container">
          <p className="result">Your BMI is: {bmi}</p>
          <p className="weight-status">Weight Status: {weightStatus}</p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
