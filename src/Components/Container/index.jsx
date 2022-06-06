import { useState, useEffect } from "react";

import axios from "axios";

import CurrentCard from "./CurrentCard";
import ForecastCard from "./ForecastCard";

import { WeatherContext, useWeather } from "../../Context/main.jsx";

function Container() {
  const { setWeather, city } = useWeather(WeatherContext);

  const [isLoading, setIsLoading] = useState(false);

  const apiKey = "2b30cae44fa069dcf92d41a2623404b5"; //"a2e9b9f042f4421c9d145844222505";

  useEffect(() => {
    const result = async () => {
      try {
        const { data } = await axios(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&units=metric&exclude=current,minutely,hourly,alerts&lang=tr&appid=${apiKey}`
        );
        setWeather(data);
        setIsLoading(true);
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
