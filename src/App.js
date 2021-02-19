import React, { useState, useEffect } from 'react'; 
import './css/App.scss';
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

  const [resStatus, setResStatus] = useState('OK');

  //Aux state used in toggleUnits
  const [memSearch, setMemSearch] = useState('montevideo');

  const menuHandler = () => {
    menuState === 'closed' ? toggleMenu('open') : toggleMenu('closed');
  }

  const toggleUnits = () => {
    units === 'metric' ? setUnits('imperial') : setUnits('metric');
  }

  useEffect(() => getInfo(), [units]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => getInfo(), []); // eslint-disable-line react-hooks/exhaustive-deps

  //Shows error message if API response is 404
  const errorHandler = () => {
    setResStatus('ERROR');
    setTimeout(() => {
      setResStatus('OK');
    }, 2200);
  }
  
  const getInfo = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${memSearch}&units=${units}&appid=${api_key}`)
    .then(
      res => res.json())
      .then( data => {
          console.log(data);
          const newWeatherValues = {
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            wind: data.wind.speed,
            rain: data.rain,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            img: data.weather[0].icon,
            desc: data.weather[0].description
          }
          updateWeatherValues(newWeatherValues);
          updateSearchQuery('');
        })
  }

  const searchboxHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=${units}&appid=${api_key}`)
    .then(
        res => res.json())
        .then( data => {
          console.log(data.cod);
          if (data.cod === 200){
                console.log(data);
                const newWeatherValues = {
                  temp: data.main.temp,
                  city: data.name,
                  country: data.sys.country,
                  wind: data.wind.speed,
                  rain: data.rain,
                  pressure: data.main.pressure,
                  humidity: data.main.humidity,
                  img: data.weather[0].icon,
                  desc: data.weather[0].description
                }
                updateWeatherValues(newWeatherValues);
                setMemSearch(searchQuery);
                updateSearchQuery('');
          }
          else if (data.cod === '404'){ //manejo el error aca
            console.log("Error!");
            updateSearchQuery('');
            errorHandler();
          }
        })
  }

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
          <p className={"search-error-"+resStatus}>Error: Can't find your city</p>
      </div>
    </div>
  );
}

export default App;
