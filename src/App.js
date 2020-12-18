import React from 'react';
import './App.css';
import WeatherData from './components/WeatherData';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content-wrapper">
        <WeatherData />
      </div>
    </div>
  );
}

export default App;
