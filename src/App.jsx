import { createContext, useState } from "react";
//import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import Navbar from "./components/Navbar";
import "./App.css";
export const CityContext = createContext();
export const UnitContext = createContext();
//<SearchBar handleCityData={handleCityData} />
function App() {
  const [city, setCity] = useState(null);
  const [isCelsius, setIsCelsius] = useState(false);

  return (
    <UnitContext.Provider value={[isCelsius, setIsCelsius]}>
      <CityContext.Provider value={[city, setCity]}>
        <Navbar />
        <div className="md:mx-10">
          {city ? null : (
            <div className=" mt-24 text-2xl text-center md:hidden">
              <div>Welcome!</div>
              <div>Open the sidebar to enter a city</div>
            </div>
          )}

          {city ? <Weather /> : null}
        </div>
      </CityContext.Provider>
    </UnitContext.Provider>
  );
}

export default App;
