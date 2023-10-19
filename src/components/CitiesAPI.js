const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

async function fetchCities(query) {
  const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=5&minPopulation=50000&namePrefix=${query}`;

  try {
    const response = await fetch(url, options);
    const response_1 = await response.json();
    return response_1.data.map((city) => ({
      value: `${city.latitude},${city.longitude}`,
      label:
        city.name === city.region
          ? `${city.name}, ${city.countryCode}`
          : `${city.name}, ${city.region}, ${city.countryCode}`,
    }));
  } catch (err) {
    return console.error(err);
  }
}

export default fetchCities;
