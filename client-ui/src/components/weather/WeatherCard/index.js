import { Typography } from '@mui/material';
import React from 'react'
import { calcKelvToFahTemp } from '../../../shared/utils/temperature';

function WeatherCard({ data }) {
    const getIcon = (text) => {
        switch (text) {
            case 'clouds':
                return <img width="100px" src="/assets/cloud.svg" alt="cloud" />
            case 'rain':
                return <img width="100px" src="/assets/rain.svg" alt="rain" />
            case 'clear':
                return <img width="100px" src="/assets/sun.svg" alt="sun" />
            case 'storm':
                return <img width="100px" src="/assets/storm.svg" alt="sun" />
            case 'snow':
                return <img width="100px" src="/assets/snow.svg" alt="sun" />
            default:
                return <img width="100px" src="/assets/cloud.svg" alt="sun" />;
        }
    }
    return (
        <div className="wrapper">
            <div className="titleInfo">
                <Typography variant="h2" >{data.name}, {data.sys.country}</Typography>
            </div>
            <div className="detailsInfo">
                <div className="iconContainer">
                    {
                        getIcon(data.weather[0].main.toLowerCase())
                    }
                    <Typography variant="h3">{calcKelvToFahTemp(data.main.temp)}°F</Typography>
                </div>
                <div className="detailsContainer">
                    <span>
                        <Typography variant="h4">Cloud:</Typography>
                        <Typography variant="h5">{data.weather[0].description}</Typography>
                    </span>
                    <span>
                        <Typography variant="h4">Wind: </Typography>
                        <Typography variant="h5">{data.wind.speed}m/s</Typography>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;
