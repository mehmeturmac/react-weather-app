import { createContext, useState, useContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState(localStorage.getItem("city") || "Adana");

  const values = { weather, setWeather, city, setCity };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
