// TemperatureConverter.js

import React, { useState } from 'react';
import './TemperatureConverter.css';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');
  const [rankine, setRankine] = useState('');
  const [reaumur, setReaumur] = useState('');

  const handleCelsiusChange = (value) => {
    setCelsius(value);
    setFahrenheit((parseFloat(value) * 9 / 5 + 32).toFixed(2));
    setKelvin((parseFloat(value) + 273.15).toFixed(2));
    setRankine((parseFloat(value) * 9 / 5 + 491.67).toFixed(2));
    setReaumur((parseFloat(value) * 4 / 5).toFixed(2));
  };

  const handleFahrenheitChange = (value) => {
    setFahrenheit(value);
    setCelsius(((parseFloat(value) - 32) * 5 / 9).toFixed(2));
    setKelvin(((parseFloat(value) - 32) * 5 / 9 + 273.15).toFixed(2));
    setRankine(parseFloat(value) + 459.67);
    setReaumur(((parseFloat(value) - 32) * 4 / 9).toFixed(2));
  };

  const handleKelvinChange = (value) => {
    setKelvin(value);
    setCelsius((parseFloat(value) - 273.15).toFixed(2));
    setFahrenheit(((parseFloat(value) - 273.15) * 9 / 5 + 32).toFixed(2));
    setRankine(parseFloat(value) * 1.8);
    setReaumur(((parseFloat(value) - 273.15) * 4 / 5).toFixed(2));
  };

  const handleRankineChange = (value) => {
    setRankine(value);
    setCelsius(((parseFloat(value) - 491.67) * 5 / 9).toFixed(2));
    setFahrenheit(parseFloat(value) - 459.67);
    setKelvin(parseFloat(value) * 5 / 9);
    setReaumur(((parseFloat(value) - 491.67) * 4 / 9).toFixed(2));
  };

  const handleReaumurChange = (value) => {
    setReaumur(value);
    setCelsius((parseFloat(value) * 5 / 4).toFixed(2));
    setFahrenheit((parseFloat(value) * 9 / 4 + 32).toFixed(2));
    setKelvin((parseFloat(value) * 5 / 4 + 273.15).toFixed(2));
    setRankine((parseFloat(value) * 9 / 4 + 491.67).toFixed(2));
  };

  return (
    <div className="temperature-converter">
      <h2 className="title">TemperatureConverter </h2>
      <div className="input-container">
        <label>Celsius:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="number" value={celsius} onChange={(e) => handleCelsiusChange(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Fahrenheit:&nbsp;&nbsp;</label>
        <input type="number" value={fahrenheit} onChange={(e) => handleFahrenheitChange(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Kelvin:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="number" value={kelvin} onChange={(e) => handleKelvinChange(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Rankine:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="number" value={rankine} onChange={(e) => handleRankineChange(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Réaumur:&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="number" value={reaumur} onChange={(e) => handleReaumurChange(e.target.value)} />
      </div>
    </div>
  );
};

export default TemperatureConverter;
