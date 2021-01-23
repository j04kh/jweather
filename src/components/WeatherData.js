import React from 'react';

const WeatherData = (props) => {
    return(
        <div className="main-container">
            <div className="container-up">
                <div className="col-left">
                    <div className="temp"> 
                      {props.units === 'metric' ? props.weatherValues && Math.round(props.weatherValues.temp) + "ºC" : 
                        props.weatherValues && Math.round(props.weatherValues.temp) + "ºF"}
                    </div>
                    <div className="location">
                        {props.weatherValues && props.weatherValues.city}, {props.weatherValues && props.weatherValues.country}
                    </div>
                </div>
                <div className="right-col">
                    <div className="weather-img"> <img className="img-desc" src={`http://openweathermap.org/img/wn/${props.weatherValues.img}@2x.png`} alt="weather-description-icon" /></div>
                    <p> {props.weatherValues.desc}</p>
                </div>
                
            </div>
            <div className="container-bottom">
                <div className="data-item">
                    <p>{props.units === 'metric' ? props.weatherValues && Math.round(props.weatherValues.wind) + " m/s" : 
                    props.weatherValues && Math.round(props.weatherValues.wind) + " mph" } </p>
                    <h1>Wind</h1>
                </div>
                <div className="data-item">
                    <p> {props.weatherValues && props.weatherValues.pressure + " hPa"}</p>
                    <h1>Pressure</h1>
                </div>
                <div className="data-item">
                    <p>{props.weatherValues && props.weatherValues.humidity + " %"}</p>
                    <h1>Humidity</h1>
                </div>
            </div>
        </div>
    );
};


export default WeatherData;