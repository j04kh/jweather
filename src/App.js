import React, { useState, useEffect } from 'react'; 
import Axios from 'axios';
import './App.css';
import WeatherData from './components/WeatherData';
import NavBar from './components/NavBar';
import Search from "./assets/search-icon.png";
import Menu from './components/Menu';

function App() {

  const [weatherValues, updateWeatherValues] = useState({
    temp: 0,
    city: '',
    country: '',
    wind: 0,
    rain: 0,
    pressure: 0,
    humidity: 0,
    img: '',
    desc: ''
  });

  const api_key = `${process.env.REACT_APP_API_KEY}`;

  const [searchQuery, updateSearchQuery] = useState('');

  const [menuState, toggleMenu] = useState('closed');

  const [units, setUnits] = useState('metric');

  //Aux state used in toggleUnits
  const [memSearch, setMemSearch] = useState('montevideo');

  const menuHandler = (e) => {
    menuState === 'closed' ? toggleMenu('open') : toggleMenu('closed');
  }

  const toggleUnits = (e) => {
    units === 'metric' ? setUnits('imperial') : setUnits('metric');
    
  }

  useEffect(() => getInfo(), [units]);

  useEffect(() => getInfo(), []);
  
  const getInfo = () => {
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${memSearch}&units=${units}&appid=${api_key}`).then(
      res => {
        console.log(res);
        const newWeatherValues = {
          temp: res.data.main.temp,
          city: res.data.name,
          country: res.data.sys.country,
          wind: res.data.wind.speed,
          rain: res.data.rain,
          pressure: res.data.main.pressure,
          humidity: res.data.main.humidity,
          img: res.data.weather[0].icon,
          desc: res.data.weather[0].description
        }
        updateWeatherValues(newWeatherValues);
        updateSearchQuery('');
      }
    )
    }
  

  const searchboxHandler = (e) => {
    e.preventDefault();
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=${units}&appid=${api_key}`).then(
        res => {
          console.log(res);
          const newWeatherValues = {
            temp: res.data.main.temp,
            city: res.data.name,
            country: res.data.sys.country,
            wind: res.data.wind.speed,
            rain: res.data.rain,
            pressure: res.data.main.pressure,
            humidity: res.data.main.humidity,
            img: res.data.weather[0].icon,
            desc: res.data.weather[0].description
          }
          updateWeatherValues(newWeatherValues);
          setMemSearch(searchQuery);
          updateSearchQuery('');
        }
      )}
  

  return (
    <div className="App">
      <NavBar toggle={e => menuHandler(e)} />
      <Menu toggleU={e => toggleUnits(e)} st={menuState} units={units} />
      <div className="content-wrapper">
        <WeatherData units={units} weatherValues={weatherValues} />
        <form className="form-container" onSubmit={e => searchboxHandler(e)} onChange={e => updateSearchQuery(e.target.value)}>
          <input type="text" name="search" className="searchbox" value={searchQuery} placeholder="Find your city" />
          <button type="submit" className="btn"><img id="search-icon" src={Search} alt="search-icon" /></button>
        </form>
      </div>
    </div>
  );
}

export default App;
