import React from 'react';
import { Typography } from '@mui/material';
import moment from "moment";
import { calcKelvToFahTemp } from "../../../shared/utils/temperature"
function WeatherForcastCard({ data }) {
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
        <div className='mainContainer'>
            <div className='scroller'>
                {
                    data.map((forcast, index) => {
                        return (
                            <div key={index} className='weatherContainer'>
                                <div className='dateIconContainer'>
                                    <Typography variant='h5' >{moment(forcast.dt_txt).format("dddd")}</Typography>
                                    <Typography variant='subtitle1' >{moment(forcast.dt_txt).format("h:mm:ss a")}</Typography>
                                    {getIcon(forcast.weather[0].main.toLowerCase())}
                                </div>
                                <div className='tempDetailContainer'>
                                    <Typography variant='h4'>{calcKelvToFahTemp(forcast.main.temp_min)}F</Typography>
                                    <Typography variant='h4'>18.08F</Typography>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default WeatherForcastCard;
