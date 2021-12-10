import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILED, FETCH_FORCAST_SUCCESS } from "../../shared/constants/actionTypes";

export const fetchWeatherRequest = () => {
    return {
        type: FETCH_REQUEST,
    };
};
export const fetchWeatherSuccess = (data) => {
    return {
        payload: data,
        type: FETCH_SUCCESS,
    };
};
export const fetchWeatherForcastSuccess = (data) => {
    return {
        payload: data,
        type: FETCH_FORCAST_SUCCESS,
    };
};
export const fetchWeatherFailure = (error) => {
    return {
        payload: error,
        type: FETCH_FAILED,
    };
};