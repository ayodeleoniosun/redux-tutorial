import { 
    FETCH_ADS_REQUEST, 
    FETCH_ADS_SUCCESS, 
    FETCH_ADS_FAILURE 
} from "./adsTypes"

import axios from "axios"

export const fetchAdsRequest = _ => {
    return {
        type: FETCH_ADS_REQUEST
    }
}

export const fetchAdsSuccess = (ads) => {
    return {
        type: FETCH_ADS_SUCCESS,
        payload: ads
    }
}

export const fetchAdsFailure = (error) => {
    return {
        type: FETCH_ADS_FAILURE,
        payload: error
    }
}

export const fetchAds = () => {
    return (dispatch) => {
        dispatch(fetchAdsRequest);
        
        axios.get('http://sellit.test/api/v1/ads')
            .then(response => {
                const ads = response.data.data;
                dispatch(fetchAdsSuccess(ads));
            })
            .catch(error => {
                dispatch(fetchAdsFailure(error.message));
            })
    }
}