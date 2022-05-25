import { WeatherContext, useWeather } from "../../../Context/main";

function CurrentCard() {
  const { weather } = useWeather(WeatherContext);
  return (
    <div className="currentCard">
      <div className="currentCardBox">
        <img
          src={"https:" + weather.current.condition.icon}
          alt={weather.current.condition.text}
        />
        <h1>{weather.location.name}</h1>
        <h4>{weather.current.condition.text}</h4>
        <span className="temp">{weather.current.temp_c}&#176;</span>
        <span className="fTemp">{weather.current.feelslike_c}&#176;</span>
      </div>
    </div>
  );
}

export default CurrentCard;
