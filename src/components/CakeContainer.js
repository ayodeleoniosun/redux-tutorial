import React, { Component, useState } from 'react';
import { buyCake } from '../redux/actions';
import { connect, useSelector, useDispatch } from 'react-redux';

function CakeContainer (props) {
    const [number, setNumber] = useState(1);
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();

    return (
        <div>
            <h2> Number of cakes - {numOfCakes}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value) }/>
            <button onClick={() => dispatch(buyCake(number))}> Buy {number} cakes </button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}

export default CakeContainer;