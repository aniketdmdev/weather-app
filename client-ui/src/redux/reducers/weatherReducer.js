import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILED, FETCH_FORCAST_SUCCESS } from "../../shared/constants/actionTypes";

const initialState = {
    loading: false,
    data: null,
    forcast: null,
    errorMsg: null
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                errorMsg: null
            };
        case FETCH_FORCAST_SUCCESS:
            return {
                ...state,
                loading: false,
                forcast: action.payload,
                errorMsg: null
            };
        case FETCH_FAILED:
            return {
                ...state,
                loading: false,
                errorMsg: action.payload,
            };
        default:
            return state;
    }
};

export default weatherReducer;
