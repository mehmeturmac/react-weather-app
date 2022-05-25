import { useWeather } from "../../Context/main.jsx";

import citiesData from "../../Data/tr.json";

function Header() {
  const { city, setCity } = useWeather();

  const date = new Date();

  const cityChange = (e) => {
    setCity(e.target.value);
    localStorage.setItem("city", e.target.value);
  };

  return (
    <header>
      <select
        className="cities"
        name="cities"
        id="cities"
        value={city}
        onChange={cityChange}
      >
        {citiesData.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
      <span className="time">
        {"Tarih: " +
          date.getDate() +
          "." +
          (date.getMonth() + 1) +
          "." +
          date.getFullYear()}
      </span>
    </header>
  );
}

export default Header;
