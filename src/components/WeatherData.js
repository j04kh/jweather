import React from 'react';

const WeatherData = (props) => {

    // Conditional operator '?' to show a '-' if the data is not loaded, instead of showing 'NaN' or something like that

    return(
        <div className="main-container">
            <div className="container-up">
                <div className="col-left">
                    <div className="temp"> 
                      {props.weatherValues[0]===undefined ? "-" : Math.round(props.weatherValues[0])+"ºC"}
                    </div>
                    <div className="location">
                        {props.weatherValues[1]===undefined ? "-" : props.weatherValues[1]}, {props.weatherValues[2]===undefined ? "-" : props.weatherValues[2]}
                    </div>
                </div>
                <div className="right-col">
                    <div className="weather-img"> <img src={`http://openweathermap.org/img/wn/${props.weatherValues[7]}@2x.png`}></img> </div>
                    <p> {props.weatherValues[8]}</p>
                </div>
                
            </div>
            <div className="container-bottom">
                <div className="data-item">
                    <p>{props.weatherValues[3]===undefined ? "-" : Math.round(props.weatherValues[3])+" kt"} </p>
                    <h1>Wind</h1>
                </div>
                <div className="data-item">
                    <p>{props.weatherValues[4]===undefined ? "-" : props.weatherValues[4]+" mm"} </p>
                    <h1>Rain</h1>
                </div>
                <div className="data-item">
                    <p> {props.weatherValues[5]===undefined ? "-" : props.weatherValues[5]+" hpa"}</p>
                    <h1>Pressure</h1>
                </div>
                <div className="data-item">
                    <p>{props.weatherValues[6]===undefined ? "-" : props.weatherValues[6]+" %"}</p>
                    <h1>Humidity</h1>
                </div>
            </div>
        </div>
    );
};


export default WeatherData;