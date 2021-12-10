import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';

import WeatherForcastCard from './WeatherForecastCard';

import Dropdown from '../common/Dropdown';
import WeatherDetails from './WeatherDetails';
import Loader from '../common/Loader';
import { fetchWeather, fetchWeatherForcast } from '../../services/weather.service';
import { fetchWeatherRequest, fetchWeatherSuccess, fetchWeatherFailure, fetchWeatherForcastSuccess } from "../../redux/action/weatherAction"
import { PLATFORM_CONSTANTS } from "../../shared/constants/platform.constants";


function Weather() {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');
    const [showForcast, setShowForcast] = useState(false)
    const [error, setError] = useState(null)
    const { weatherState } = useSelector(redux => redux)
    const { CITY_LIST } = PLATFORM_CONSTANTS

    useEffect(() => {
        if (city) {
            fetchData();
        }
    }, [city]);

    const fetchData = () => {
        dispatch(fetchWeatherRequest())
        fetchWeather(city).then((res) => {
            dispatch(fetchWeatherSuccess(res.data))
        }).catch((error) => {
            dispatch(fetchWeatherFailure(error))
            setError("Failed to Fetch the Data.");
            setTimeout(() => setError(null), 3000)
        })
        fetchWeatherForcast(city).then((res) => {
            dispatch(fetchWeatherForcastSuccess(res.data))
        }).catch((error) => {
            dispatch(fetchWeatherFailure(error))
            setError("Failed to Fetch the Data.");
            setTimeout(() => setError(null), 3000)
        })
    }

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div className="main">
            <div className="topBar">
                <h1>Weather Application</h1>
                <div className="inputDiv">
                    <Dropdown
                        label="Select City"
                        value={city}
                        options={CITY_LIST}
                        info={"Select the city to view the Weather."}
                        onChange={handleChange}
                    />
                </div>
                {
                    weatherState.loading ?
                        <Loader /> :
                        <WeatherDetails
                            data={weatherState.data}
                            showForcast={showForcast}
                            setShowForcast={setShowForcast}
                        />
                }
                {
                    error ? <Typography variant='h6' color="error">{error || "hey therer"}</Typography> : null
                }

                <div className="loweBar">
                    {
                        showForcast ?
                            <WeatherForcastCard
                                data={weatherState.forcast.list}
                            /> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Weather;
