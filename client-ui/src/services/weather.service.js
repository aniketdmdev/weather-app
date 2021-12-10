import axios from "axios";
import { API_CONSTANTS } from "../shared/constants/api.constants"
export const fetchWeather = async (id) => {
    try {
        const res = axios.post(API_CONSTANTS.WEATHER.CURRENT_WEATHER, { city_id: id })
        return res
    }
    catch (error) {
        console.error(error);
    }
}
export const fetchWeatherForcast = async (id) => {
    try {
        const res = axios.post(API_CONSTANTS.WEATHER.FORCAST_WEATHER, { city_id: id })
        return res
    }
    catch (error) {
        console.error(error);
    }
}