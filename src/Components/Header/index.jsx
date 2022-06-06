import { useWeather } from "../../Context/main.jsx";

import citiesData from "../../Data/tr.json";

function Header() {
  const { city, setCity } = useWeather();

  const cityChange = (e) => {
    citiesData.map((citydata) => {
      if (citydata.name === e.target.value) {
        setCity(citydata);
        localStorage.setItem("city", JSON.stringify(citydata));
      }
      return null;
    });
  };

  return (
    <header>
      <select
        className="cities"
        name="cities"
        id="cities"
        value={city.name}
        onChange={cityChange}
      >
        {citiesData.map((citydata) => (
          <option key={citydata.id} value={citydata.name}>
            {citydata.name}
          </option>
        ))}
      </select>
    </header>
  );
}

export default Header;
