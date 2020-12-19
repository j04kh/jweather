import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import WeatherData from './components/WeatherData';
import NavBar from './components/NavBar';

function App() {

  let coordLat = -34;
  let coordLong = 56;

  let temp = 0;
  let city = '';
  let country = '';
  let wind = 0;
  let rain = 0;
  let pressure = 0;
  let humidity = 0;
  let img = '';
  let desc = '';

  const [coords, updateCoords] = useState([coordLat, coordLong]);

  const [weatherValues, updateWeatherValues] = useState(
    temp = 0,
    city = '',
    country = '',
    wind = 0,
    rain = 0,
    pressure = 0,
    humidity = 0,
    img = '',
    desc = ''
  );

  const [searchQuery, updateSearchQuery] = useState('');

  useEffect(() => getLocationInfo(), []);
  
  
  const getLocationInfo = () => {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        coordLat = position.coords.latitude;
        coordLong = position.coords.longitude;

        let newCoords = [coordLat, coordLong];
        updateCoords(newCoords);
       
        console.log("Coordenadas: " + coordLat + coordLong);

        Axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${coordLat}&lon=${coordLong}&units=metric&appid=9a1a834849335352ddd99f2f95f6ae9d`).then(
        res => {
          console.log(res);
          let newWeatherValues = [
            temp = res.data.main.temp,
            city = res.data.name,
            country = res.data.sys.country,
            wind = res.data.wind.speed,
            rain = res.data.rain,
            pressure = res.data.main.pressure,
            humidity = res.data.main.humidity,
            img = res.data.weather[0].icon,
            desc = res.data.weather[0].description
          ]
          updateWeatherValues(newWeatherValues);
        }
      )
      })

    } else {
      console.log("Geolocation is not supported.");
    }
  }

  const searchboxHandler = (e) => {
    console.log("BUSCA? " + searchQuery);
    e.preventDefault();
    Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=9a1a834849335352ddd99f2f95f6ae9d`).then(
        res => {
          console.log(res);
          let newWeatherValues = [
            temp = res.data.main.temp,
            city = res.data.name,
            country = res.data.sys.country,
            wind = res.data.wind.speed,
            rain = 0,
            pressure = res.data.main.pressure,
            humidity = res.data.main.humidity,
            img = res.data.weather[0].icon,
            desc = res.data.weather[0].description
          ]
          updateWeatherValues(newWeatherValues);
          updateSearchQuery('');
        }
      )}
  

  return (
    <div className="App">
      <NavBar />
      <div className="content-wrapper">
        <WeatherData weatherValues={weatherValues} />
        <form onSubmit={e => searchboxHandler(e)} onChange={e => updateSearchQuery(e.target.value)}>
          <input type="text" name="search" className="searchbox" value={searchQuery} placeholder="Find your city"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
