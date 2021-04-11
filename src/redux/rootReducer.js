import { combineReducers } from 'redux';
import { cakeReducer, adsReducer } from './reducers';

const rootReducer = combineReducers({
    cake: cakeReducer,
    ads: adsReducer
})

export default rootReducer;