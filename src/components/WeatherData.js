import React from 'react';

const WeatherData = (props) => {

    console.log("PROPS: " + props.weatherValues);
    
    // I'm Using the logic operator '?' to show a '-' when de data is not loaded, instead of showing 'NaN' or something like that

    return(
        <div className="main-container">
            <div className="container-up">
                <div className="col-left">
                    <div className="temp"> 
                      {props.weatherValues[0]==undefined ? "-" : Math.round(props.weatherValues[0])+"ºC"}
                    </div>
                    <div className="location">
                        {props.weatherValues[1]==undefined ? "-" : props.weatherValues[1]}, {props.weatherValues[2]==undefined ? "-" : props.weatherValues[2]}
                    </div>
                </div>

                <div className="weather-img"></div>
            </div>
            <div className="container-bottom">
                <div className="data-item">
                    <p>{props.weatherValues[3]==undefined ? "-" : Math.round(props.weatherValues[3])+"km/h"} </p>
                    <h1>Wind</h1>
                </div>
                <div className="data-item">
                    <p>{props.weatherValues[4]==undefined ? "-" : props.weatherValues[4]+"%"} </p>
                    <h1>Rain</h1>
                </div>
                <div className="data-item">
                    <p> {props.weatherValues[5]==undefined ? "-" : props.weatherValues[5]+"hpa"}</p>
                    <h1>Pressure</h1>
                </div>
                <div className="data-item">
                    <p>{props.weatherValues[6]==undefined ? "-" : props.weatherValues[6]+"%"}</p>
                    <h1>Humidity</h1>
                </div>
            </div>
        </div>
    );
};


export default WeatherData;