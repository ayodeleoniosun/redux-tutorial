const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const axios  = require('axios');

const createStore = redux.createStore;
const applyMiddleware  = redux.applyMiddleware;

const FETCH_ADS_REQUEST = 'FETCH_ADS_REQUEST';
const FETCH_ADS_SUCCESS = 'FETCH_ADS_SUCCESS';
const FETCH_ADS_FAILURE = 'FETCH_ADS_FAILURE';

//state
const initialState = {
    loading: false,
    ads: [],
    error: ''
} 


//action creators
const fetchAdsRequest = () => {
    return {
        type: FETCH_ADS_REQUEST
    } 
}

const fetchAdsSuccess = ads => {
    return {
        type: FETCH_ADS_SUCCESS,
        payload: ads
    }
}

const fetchAdsFailure = error => {
    return {
        type: FETCH_ADS_FAILURE,
        payload: error
    }
}


//REDUCERS
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ADS_REQUEST: 
            return {
                ...state,
                loading: true
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
 
        default: return state 
    }
}

const fetchAds = () => {
    return function (dispatch) {
        dispatch(fetchAdsRequest());

       axios.get('http://sellit.test/api/v1/ads')
        .then(response => { 
            const ads = response.data.data.map(ads => ads.id);
            dispatch(fetchAdsSuccess(ads));
        })
        .catch(error => {
            dispatch(fetchAdsFailure(error.message));
        });
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe( () => {console.log('Initial state', store.getState())});
store.dispatch(fetchAds());

