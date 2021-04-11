import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeContainer from './components/CakeContainer';
import AdsContainer from './components/AdsContainer';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <AdsContainer/>
      </div>
    </Provider>
  );
}

export default App;
