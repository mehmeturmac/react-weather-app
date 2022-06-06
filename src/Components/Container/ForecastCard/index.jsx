import { WeatherContext, useWeather } from "../../../Context/main";

function ForecastCard() {
  const { weather, days } = useWeather(WeatherContext);

  const date = new Date();
  const today = date.getDay();

  const dateFormat = () => {
    date.setDate(date.getDate() + 1);
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
  };

  const dayFormat = (day) => {
    let newDay = today + day + 1;
    if (newDay >= 7) {
      newDay = newDay - 7;
    }
    return days[newDay];
  };

  return (
    <div className="ForecastCard">
      {weather.daily.slice(1).map((day, i) => (
        <div key={i} className="ForecastCardBox">
          <img
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt={day.weather[0].description}
          />
          <h1>{dayFormat(i)}</h1>
          <h5>{dateFormat()}</h5>
          <h2>
            {day.weather[0].description
              .split(" ")
              .map((desc) => `${desc.charAt(0).toUpperCase() + desc.slice(1)}`)
              .join(" ")}
          </h2>
          <span className="foretemp">
            <span className="vertical">Max</span>
            {day.temp.max}&#176;
          </span>
          <span className="forefTemp">
            <span className="vertical">Min</span>
            {day.temp.min}&#176;
          </span>
        </div>
      ))}
    </div>
  );
}

export default ForecastCard;
