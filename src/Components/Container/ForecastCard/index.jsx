import { WeatherContext, useWeather } from "../../../Context/main";

function ForecastCard() {
  const { weather } = useWeather(WeatherContext);

  const weatherDays = weather.forecast.forecastday;

  const date = new Date();
  const today = date.getDay();

  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarsamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  const dateFormat = (date) => {
    return date.split("-").reverse().join(".");
  };

  const dayFormat = (day) => {
    switch (day) {
      case 0:
        return "Bugün";
      case 1:
        return "Yarın";
      default:
        return days[today + day];
    }
  };

  return (
    <div className="ForecastCard">
      {weatherDays.map((day, i) => (
        <div key={i} className="ForecastCardBox">
          <img
            src={"https:" + day.day.condition.icon}
            alt={day.day.condition.text}
          />
          <h1>{dayFormat(i)}</h1>
          <h5>{dateFormat(day.date)}</h5>
          <h2>{day.day.condition.text}</h2>
          <span className="foretemp">
            <span className="vertical">Max</span>
            {day.day.maxtemp_c}&#176;
          </span>
          <span className="forefTemp">
            <span className="vertical">Min</span>
            {day.day.mintemp_c}&#176;
          </span>
        </div>
      ))}
    </div>
  );
}

export default ForecastCard;
