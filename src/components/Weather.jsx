import CurrentWeather from "./CurrentWeather";
import useWeatherAPI from "./useWeatherAPI";
import { useContext } from "react";
import Forecast from "./Forecast";
import { CityContext } from "../App";

const Weather = ({}) => {
  const [city, setCity] = useContext(CityContext);
  const { weather, forecast, error, isLoading } = useWeatherAPI(
    city.value.split(",")[0],
    city.value.split(",")[1]
  );

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (weather && forecast) {
    return (
      <div>
        <CurrentWeather weather={weather} city={city}></CurrentWeather>
        <Forecast forecast={forecast} />
      </div>
    );
  }
};

export default Weather;
