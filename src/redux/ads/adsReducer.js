import { FETCH_ADS_REQUEST, FETCH_ADS_SUCCESS, FETCH_ADS_FAILURE } from "./adsTypes";

const initialState = {
    loading: true,
    ads: [],
    error: ''
}

export const adsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ADS_REQUEST:
            return {
                ...state,
                loading: true,
                ads: [],
                error: ''
            }

        case FETCH_ADS_SUCCESS:
            return {
                ...state,
                loading: false,
                ads: action.payload,
                error: ''
            }

        case FETCH_ADS_FAILURE:
            return {
                ...state,
                loading: false,
                ads: [],
                error: action.payload
            }

        default: return state;
    }
}