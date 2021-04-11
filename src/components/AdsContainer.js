import React, { useEffect, Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchAds } from '../redux/ads/adsActions';

function AdsContainer () {
    const adsData = useSelector(state => state.ads);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchAds());
    }, []);

    return adsData.loading ? (
        <p> Loading ...</p>
    ) : adsData.error ? (
        <p> {adsData.error} </p>
    ) : (
        <div> 
            <h2> Ads List </h2>
            <div>
                {adsData && adsData.ads && adsData.ads.map(ads => {
                    return <p> {ads.name} </p>
                })}
            </div>
        </div>
    )
} 

const mapStateToProps = state => {
    return {
        adsData: state.ads
    }
} 

const mapDispatchToProps = dispatch => {
    
    return {
        fetchAds: () => dispatch(fetchAds())
    }
}

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// ) (AdsContainer);


export default AdsContainer;    