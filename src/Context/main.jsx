import { createContext, useState, useContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState(
    JSON.parse(localStorage.getItem("city")) || {
      id: 1,
      name: "Adana",
      latitude: "37.0000",
      longitude: "35.3213",
      population: 2183167,
      region: "Akdeniz",
    }
  );

  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarsamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  const values = { weather, setWeather, city, setCity, days };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
