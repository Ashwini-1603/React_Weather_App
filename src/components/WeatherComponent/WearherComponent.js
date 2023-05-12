import React from "react";
import "./WearherComponent.css";
import { BsBoxArrowInRight } from "react-icons/bs";
import { BsWind } from "react-icons/bs";
import { TbDroplet } from "react-icons/tb";
import { GrSun } from "react-icons/gr";
import { FcAddColumn } from "react-icons/fc";

const WeatherIcons = {
    "01d": "/react-weather-app-public/icons/sunny.svg",
    "01n": "/react-weather-app-public/icons/night.svg",
    "02d": "/react-weather-app-public/icons/day.svg",
    "02n": "/react-weather-app-public/icons/cloudy-night.svg",
    "03d": "/react-weather-app-public/icons/cloudy.svg",
    "03n": "/react-weather-app-public/icons/cloudy.svg",
    "04d": "/react-weather-app-public/icons/perfect-day.svg",
    "04n": "/react-weather-app-public/icons/cloudy-night.svg",
    "09d": "/react-weather-app-public/icons/rain.svg",
    "09n": "/react-weather-app-public/icons/rain-night.svg",
    "10d": "/react-weather-app-public/icons/rain.svg",
    "10n": "/react-weather-app-public/icons/rain-night.svg",
    "11d": "/react-weather-app-public/icons/storm.svg",
    "11n": "/react-weather-app-public/icons/storm.svg",
  };

function WearherComponent(props) {
    
  console.log("inside weather app", props.data);
  const data = props.data;
  // const isDay = data?.weather[0].icon?.includes('d')

  return (
    <div className="weatherInfo-container">
      <div className="d-flex justify-content-around weather-logo">
        <div className="d-flex">
          <span>
            <span>
            {data.main ? Math.round(data && data.main && data.main.temp) : 0}°C
            </span>
            |
            <span style={{ textTransform: "capitalize", fontSize: "12px" }}>
              {data && data.weather && data.weather[0].description}
            </span>
          </span>
        </div>
        <img src={data.weather?WeatherIcons[data.weather[0].icon]:"/react-weather-app-public/icons/perfect-day.svg"} />
      </div>
      {/* "react-weather-app-public/icons/perfect-day.svg" */}
      <p>{data.name?data?.name:"City"},{data.sys?data?.sys?.country:"country"}</p>
      <div className="wether-info-title">weather info</div>
      <div class="row m-0">
        <div className=" d-flex align-items-center  we-decor col">
          <h4>
            <GrSun />
          </h4>
          <span className="dflex-c we-c">
            {data.main ? Math.round(data && data.main && data.main.temp) : 0}°C
            <span className="wether-info-container">tempracture</span>
          </span>
        </div>

        <div className=" d-flex align-items-center  we-decor col">
          <h4>
            <BsWind />
          </h4>
          <span className="dflex-c we-c">
            {data.wind ? data?.wind?.speed : 0}m/s
            <span className="wether-info-container">Wind</span>
          </span>
        </div>
      </div>
      <div class="row m-0">
        <div className=" d-flex align-items-center  we-decor col">
          <h4>
            <BsBoxArrowInRight />
          </h4>
          <span className="dflex-c we-c">
            {data.visibility ? data?.visibility : 0}mi
            <span className="wether-info-container">Visibility</span>
          </span>
        </div>
        <div className=" d-flex align-items-center  we-decor col">
          <h4>
            <TbDroplet />
          </h4>
          <span className="dflex-c we-c">
            {data.main ? data?.main?.humidity : 0}%
            <span className="wether-info-container">Humidity</span>
          </span>
        </div>
      </div>
      
    </div>
  );
}

export default WearherComponent;
