import { useState, useEffect } from "react";

import axios from "axios";

import CurrentCard from "./CurrentCard";
import ForecastCard from "./ForecastCard";

import { WeatherContext, useWeather } from "../../Context/main.jsx";

function Container() {
  const { weather, setWeather, city } = useWeather(WeatherContext);

  const [isLoading, setIsLoading] = useState(false);

  const apiKey = "a2e9b9f042f4421c9d145844222505"; // max 3 days for free api plan

  useEffect(() => {
    const result = async () => {
      try {
        const { data } = await axios(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&lang=tr`
        );
        setWeather(data);
        setIsLoading(true);
        console.log(weather);
      } catch (err) {
        console.error(err);
      }
    };
    result();
  }, [city]);

  return (
    <div className="weatherContainer">
      {isLoading && <CurrentCard />}
      {isLoading && <ForecastCard />}
    </div>
  );
}
export default Container;
