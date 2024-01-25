// AgeCalculator.js

import React, { useState } from 'react';
import './AgeCalculator.css'; // Import the CSS file

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const selectedDate = new Date(birthdate);
    const currentDate = new Date();

    let calculatedAge = currentDate.getFullYear() - selectedDate.getFullYear();

    if (
      currentDate.getMonth() < selectedDate.getMonth() ||
      (currentDate.getMonth() === selectedDate.getMonth() && currentDate.getDate() < selectedDate.getDate())
    ) {
      calculatedAge -= 1;
    }

    setAge(calculatedAge);
  };

  return (
    <div className="age-calculator-container">
      <h2 className="title">AGE Calculator</h2>
      <label className="label">
        Enter your birthdate:
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          className="input-field"
        />
      </label>
      <br />
      <button onClick={calculateAge} className="calculate-button">
        Calculate Age
      </button>
      {age !== null && (
        <div className="result-container">
          <p className="result">Your age is: {age} years</p>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
