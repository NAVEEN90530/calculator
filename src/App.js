// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/TemperatureConverter';
import BmiCalculator from './components/BmiCalculator';
import './App.css';
import AgeCalculator from './components/AgeCalculator';
import CurrencyConverter from './components/CurrencyConverter';
import TemperatureConverter from './components/TemperatureConverter';
import WeatherApp from './components/weather';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navigation">
          
          <Link to="/" className="nav-link">
            BMI Calculator
          </Link>
          <Link to="/AgeCalculator" className="nav-link">
          Age Calculator
          </Link>
          <Link to="/CurrencyConverter" className="nav-link">
          CurrencyConverter
          </Link>
          <Link to="/TemperatureConverter" className="nav-link">
          TemperatureConverter
          </Link>

          <Link to="/WeatherApp" className="nav-link">
          Weather
          </Link>

        </nav>

        <div className="app-container">
          <Routes>
            <Route path="/TemperatureConverter" element={<TemperatureConverter />} />
            <Route path="/" element={<BmiCalculator />} />
            <Route path="/AgeCalculator" element={<AgeCalculator />} />
            <Route path="/CurrencyConverter" element={<CurrencyConverter />} />
            <Route path="/WeatherApp" element={<WeatherApp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
