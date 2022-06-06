import { WeatherContext, useWeather } from "../../../Context/main";

function CurrentCard() {
  const { weather, city } = useWeather(WeatherContext);

  const wDesc = weather.daily[0].weather[0].description
    .split(" ")
    .map((desc) => `${desc.charAt(0).toUpperCase() + desc.slice(1)}`)
    .join(" ");

  return (
    <div className="currentCard">
      <div className="currentCardBox">
        <img
          src={`http://openweathermap.org/img/wn/${weather.daily[0].weather[0].icon}@2x.png`}
          alt={wDesc}
        />
        <h1>{city.name}</h1>
        <h5>Bugün</h5>
        <h2>{wDesc}</h2>
        <span className="temp">{weather.daily[0].temp.max}&#176;</span>
        <span className="fTemp">{weather.daily[0].temp.min}&#176;</span>
      </div>
    </div>
  );
}

export default CurrentCard;
