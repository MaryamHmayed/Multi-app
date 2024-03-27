import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import './style.css'

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const ApiURL= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c97285fd54e8b867cfba82e763118586`;
  const getData= async() => {
    try{
      const response = await axios.get(ApiURL);
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };



  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

    








  return ( <>
      <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleInputChange}
      />
      <button type="submit">Get Weather</button>
      </form>
      {weatherData ? (
        <>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Feels like : {weatherData.main.feels_like}°C</p>
          <p>Humidity : {weatherData.main.humidity}%</p>
          <p>Pressure : {weatherData.main.pressure}</p>
          <p>Wind Speed : {weatherData.wind.speed}m/s</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    

  
  
  
  
  
  
  
  
  
  
  
  
  </>)
  
  
 
};

export default WeatherApp;
