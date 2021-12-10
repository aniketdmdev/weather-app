const express = require('express');
const router = new express.Router();

// Using axios to make external API calls.
const axios = require('axios');

router.post('/current-weather', async (req, res) => {

    try {

        const { city_id } = req.body;
        let weatherData = null;

        if (city_id) {
            weatherData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${process.env.OPEN_WEATHER_API_KEY}`);

            // Taken in variable if manipulation required
            const current_weather = weatherData.data;

            return res.status(200).send(current_weather);
        } else {
            // Handling error in API
            return res.status(500).send({ message: "Encountered an Error", err: 'Please Provide City ID' });
        }

    } catch (e) {
        console.log(e.response.data);

        // Handling error in axios
        // TBD: Error handling to be done via a generic file
        res.status(500).send({ message: "Encountered an Error", err: e.response.data.message });
    }
});

router.post('/forecast-weather', async (req, res) => {

    try {

        const { city_id } = req.body;
        let weatherData = null;

        if (city_id) {
            weatherData = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${city_id}&appid=${process.env.OPEN_WEATHER_API_KEY}`);

            // Taken in variable if manipulation required
            const forecast_weather = weatherData.data;

            return res.status(200).send(forecast_weather);
        } else {
            // Handling error in API
            return res.status(500).send({ message: "Encountered an Error", err: 'Please Provide City ID' });
        }

    } catch (e) {
        console.log(e.response.data);

        // Handling error in axios
        // TBD: Error handling to be done via a generic file
        res.status(500).send({ message: "Encountered an Error", err: e.response.data.message });
    }
});

module.exports = router;