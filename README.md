
# Weather App

This is a simple weather app that uses the OpenWeatherMap API to get weather data for a given city. 
The app has three pages:

- Home page: This page displays a brief introduction to the app.
- Weather page: This page allows users to search for a city and view the current weather conditions for that city.
- About page: This page provides information about the app's development.
## Development
This app was developed using technologies:
- Node.js 
- Express.js
- Handlebars 
- CSS 
- JavaScript 

The OpenWeatherMap API was used to get weather data.


## Deployment

To install the app run the following commands:

#### 1. Check that you have Node version:

```bash
  node -v
```

#### 2. Clone this repository:

```bash
 git clone https://github.com/Rana-Saud/liveweatherapp.github.io.git
```

#### 3. Run command prompt in the folder and run this cammand to install all dependencies:

```bash
  npm install
```
#### 4. Once installed run this command:

```bash
  npm run start
```


The app will then be available at `localhost:3000`.

You are ready to go ⛳!

# Usage

To use the app, visit the home page and click the "Weather" link. You will then be prompted to enter a city name. After entering a city name, click the "Search" button.

If the city name is valid, the weather page will display the current weather conditions for that city. The weather conditions include:

- **Current weather:** A short description of the current weather conditions.
- **Today day and date:** The current day and date.
- **Pressure:** The atmospheric pressure.
- **Wind:** The wind speed and direction.
- **Feels like:** The perceived temperature.
- **Humidity:** The relative humidity.

If the city name is invalid, a message will be displayed that says "Plz Enter City Name Properly"

## API Reference

#### Get all cities weather data

```http
  GET `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=c3290a02dcee5c751182701b7435f1dd&units=metric`
```


## Tech Stack

**Client:** HTML, CSS, JS, hbs

**Server:** Node, Express


## Authors

- [@ranasaud](https://www.github.com/Rana-Saud)


## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

This app is released under the [MIT](https://choosealicense.com/licenses/mit/) License.

