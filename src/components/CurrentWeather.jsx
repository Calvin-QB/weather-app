import { useState, useContext } from "react";
import { UnitContext } from "../App";

const convertToCelsius = (temp) => {
  return Math.round(((temp - 32) * 5) / 9);
};

const CurrentWeather = ({ weather, city }) => {
  const [isCelsius, setIsCelsius] = useContext(UnitContext);

  return (
    <div className="mt-10">
      <div className="font-thin  text-center text-6xl">
        {city.label.split(", ")[0]}
      </div>
      <div className=" mr-14 flex justify-center ">
        <div className="w-24  ">
          <img
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          ></img>
        </div>
        <div className="font-thin text-8xl ">
          {isCelsius ? convertToCelsius(weather.temp) : weather.temp}
        </div>
        <div className="text-3xl  text-center">
          <div className=" ">{`${isCelsius ? "C°" : "F°"}`}</div>
        </div>
      </div>
      <div className=" font-thin text-center text-4xl">{weather.desc}</div>
    </div>
  );
};

export default CurrentWeather;
