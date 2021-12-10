# weather-app
Weather app that picks up data from the OpenWeather API and displays the current weather of the selected city as well as the forecast.

To run this project, do the following steps:

1. Copy the following variable in the env file inside `server` folder.

 > PORT=3001
 > OPEN_WEATHER_API_KEY=538882fc8387290c6cee83f313a6acf5

2. Go to server folder and run `npm i`.
3. After installation, run `npm run start:prod`. This will start your server on port 3001.
4. Run `npm i` to install the required dependencies.
5. After installation, run `npm start`. This will start your application on port 3000.
6. On your browser, go to `localhost:3000` if the application does not automatically redirects you.
7. Run the application and see the current and the forecast data after selecting the city!