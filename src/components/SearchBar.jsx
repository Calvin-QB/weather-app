import { AsyncPaginate } from "react-select-async-paginate";
import { useState, useContext } from "react";
import fetchCities from "./CitiesAPI";
import { CityContext } from "../App";

const SearchBar = ({}) => {
  const [query, setQuery] = useState(null);
  const [city, setCity] = useContext(CityContext);
  const loadOptions = async (input) => {
    return { options: input ? await fetchCities(input) : [] };
  };

  const customStyles = {
    option: (provided) => ({
      ...provided,
      color: "black",
    }),
  };

  const handleOnChange = (searchData) => {
    setQuery(searchData);
    setCity(searchData);
    //console.log("searched:", searchData);
  };

  return (
    <AsyncPaginate
      value={query}
      loadOptions={loadOptions}
      onChange={handleOnChange}
      debounceTimeout={800}
      placeholder="Enter a city..."
      className="w-full"
      styles={customStyles}
    />
  );
};

export default SearchBar;
