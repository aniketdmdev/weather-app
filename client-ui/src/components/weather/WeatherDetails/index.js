import React from 'react'
import Button from '../../common/Button/Button';
import WeatherCard from '../WeatherCard';

function WeatherDetails({ setShowForcast, showForcast, data }) {
    return (
        <div className="detailsDiv">
            {
                !!data ?
                    <>
                        <WeatherCard
                            data={data}
                        />
                        <Button
                            fontSize={"18px"}
                            color={"white"}
                            bgColor={"red"}
                            width={"15%"}
                            height={"50px"}
                            text={showForcast ? "Hide Forecast" : "Forecast"}
                            onClick={() => setShowForcast(prev => !prev)}
                        />
                    </> : null
            }
        </div>
    )
}

export default WeatherDetails;
