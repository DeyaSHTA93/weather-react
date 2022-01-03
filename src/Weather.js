import React from "react";
import axios from "axios";
import App from "./App";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      "The weather in ${response.data.name} is ${response.data.main.temp}°C"
    );
  }
  let apiKey = "ce80792f848dcdfca4fa748e5d4f8f19";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <h1>Weather App</h1>;
}
