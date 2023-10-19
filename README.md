# Weather App

Developed using Vite v4.0.4, this React-based weather application offers real-time weather updates through an intuitive user interface.

## 🌟 Key Features

- 🏙️ **City Suggestion Integration**: Enhances user search experience by minimizing potential search-related errors.
  
- 🌦️ **Comprehensive Weather Data**: Leveraging the OpenWeather API, it delivers real-time weather updates and forecasts for any selected city.

## ⚙️ Configuration

### Setup

1. **Clone the repository.**

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **API Keys**:
   Create or modify `.env` and `.env.development` in the root directory to include your API keys:
   ```env
   VITE_RAPIDAPI_KEY=your_rapidapi_key_for_geo_db
   VITE_WEATHER_API_KEY=your_openweather_api_key
   ```

   > Replace placeholders with your actual API keys.

4. **Run the App**:
   ```bash
   npm run dev
   ```

## 🚀 Deployment

For detailed deployment instructions, check out Vite's official [documentation](https://vitejs.dev/guide/build.html#deploying-static-sites).
