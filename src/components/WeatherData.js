import React from 'react';

const WeatherData = () => {
    return(
        <div className="main-container">
            <div className="container-up">

                <div className="col-left">
                    <div className="temp"> 25ºC</div>
                    <div className="location">Flores, UY</div>
                </div>

                <div className="weather-img"></div>
            </div>
            <div className="container-bottom">
                <div className="data-item">
                    <p>20 km/h</p>
                    <h1>Wind</h1>
                </div>
                <div className="data-item">
                    <p>0 %</p>
                    <h1>Rain</h1>
                </div>
                <div className="data-item">
                    <p> 1013 hpa</p>
                    <h1>Pressure</h1>
                </div>
                <div className="data-item">
                    <p>42 %</p>
                    <h1>Humidity</h1>
                </div>
            </div>
        </div>
    );
};


export default WeatherData;