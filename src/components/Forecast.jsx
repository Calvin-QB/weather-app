import { useState, useContext } from "react";
import { UnitContext } from "../App";

const convertToCelsius = (temp) => {
  return Math.round(((temp - 32) * 5) / 9);
};
const Forecast = ({ forecast }) => {
  const [isCelsius, setIsCelsius] = useContext(UnitContext);

  return (
    <div className="mt-20 md:mt-60 md:flex md:justify-around">
      {forecast.map((item, index) => (
        <div
          className="  my-20 text-xl text-center mx-auto  md:m-0 md:text-left "
          key={index}
        >
          <div>{item.day}</div>
          <div className=" mx-auto md:m-0 w-1/6 md:w-20">
            <img
              className="inline "
              src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
            ></img>
          </div>
          <div>{isCelsius ? convertToCelsius(item.temp) : item.temp}°</div>
          <div>{item.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
