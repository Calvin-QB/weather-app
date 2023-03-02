import { useState, useEffect } from "react";

const API_KEY = "";

function formatWeatherData(data) {
  return {
    temp: Math.round(data.main.temp),
    icon: data.weather[0].icon,
    desc: data.weather[0].description
      .split(" ")
      .map((word) => {
        word[0].toUpperCase() + word.substring(1);
      })
      .join(" "),
  };
}

function formatForecastData(data) {
  const formattedData = [];
  for (let i = 0; i < data.list.length; i += 1) {
    if (i % 8 == 0 || i == 39) {
      const event = new Date(data.list[i].dt * 1000).toString().split(" ");
      formattedData.push({
        day: event[0].concat(" ", event[2]),
        temp: Math.round(data.list[i].main.temp),
        icon: data.list[i].weather[0].icon,
        desc: data.list[i].weather[0].description
          .split(" ")
          .map((word) => {
            return word[0].toUpperCase() + word.substring(1);
          })
          .join(" "),
      });
    }
  }
  return formattedData;
}

function useWeatherApi(latitude, longitude) {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true); //null or true Depending on DOM rendering

  useEffect(() => {
    let didCancel = false;
    async function fetchData() {
      try {
        const [weatherResponse, forecastResponse] = await Promise.all([
          fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`
          ),
          fetch(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`
          ),
        ]);
        const weatherData = await weatherResponse.json();
        const forecastData = await forecastResponse.json();

        if (!didCancel) {
          setWeather(formatWeatherData(weatherData));
          setForecast(formatForecastData(forecastData));
        }
      } catch (error) {
        if (!didCancel) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    //Begin of useEffect
    //Checks if parameters exists before running
    if (latitude && longitude) {
      fetchData();
    }

    //cleanup, if searched again before previous effect
    // is finished set didCancel =true
    return () => {
      didCancel = true;
    };
  }, [latitude, longitude]);

  return { weather, forecast, error, isLoading };
}

export default useWeatherApi;
