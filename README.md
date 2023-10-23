
# Weather App

#### Video Demo:  https://drive.google.com/file/d/1mjXxW5gCZLx45EIfwAuy8nc5_CGcjQI9/view
#### Description:

This is a simple weather app that uses the OpenWeatherMap API to get weather data for a given city. 
The app has three pages:

- **Home page**: This page displays a brief introduction to the app.
- **Weather page**: This page allows users to search for a city and view the current weather conditions for that city, including temperature, pressure, wind speed, feels like temperature, and humidity.y.
- **About page**: This page provides information about the app's development.

## Features
- Displays the current weather conditions for a given city, including temperature, pressure, wind speed and direction, feels like temperature, and humidity.
- Allows users to search for a city by name.
- Provides a brief introduction to the app on the home page.
- Provides information about the app's creator on the about page.

## Use cases
- Users can use this app to quickly check the weather conditions for their current location or for a city that they are planning to visit.
- Users can use this app to get a more detailed understanding of the weather conditions in a particular area, such as the wind speed and direction.
- Users can use this app to plan their activities for the day, such as whether to dress warmly or bring an umbrella.

## Development
This app was developed using the following technologies:
- Node.js 
- Express.js
- Handlebars 
- CSS 
- JavaScript 

The OpenWeatherMap API was used to get weather data.

## Deployment 

To deploy this app, you will need to have Node.js installed on your machine. Once you have Node.js installed, you can clone this repository and run the following commands to install the dependencies and start the app:

`git clone https://github.com/Rana-Saud/liveweatherapp.github.io.git`

`cd Rana-Saud`

`npm install`

`npm run start`

The app will then be available at `localhost:3000`.

## Usage

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

The OpenWeatherMap API was used to get weather data for this app. The following is a sample GET request to the OpenWeatherMap API:

```http
https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=c3290a02dcee5c751182701b7435f1dd&units=metric
```
The `q` parameter is the name of the city whose weather you want to check. The `appid` parameter is your OpenWeatherMap API key. The `units` parameter is the units in which you want the weather data to be returned.

## Tech Stack

**Client:** HTML, CSS, JS, hbs

**Server:** Node, Express


## Authors

- [@ranasaud](https://www.github.com/Rana-Saud)


## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

This app is released under the [MIT](https://choosealicense.com/licenses/mit/) License.

