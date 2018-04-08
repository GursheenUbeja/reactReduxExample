import React from 'react';
import ReactDOM from 'react-dom';
import Gursheen from './App.jsx';
import Movie from './Movies.jsx';
import UserApp from './UserApp.jsx';
import WeatherApp from './WeatherApp.jsx';
import {createStore} from 'redux';
import allReducers from './reducers/index.jsx'
import {Provider} from 'react-redux';


import Board from './Board.jsx';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store = {store}>
 <WeatherApp/>
</Provider>
, document.getElementById('app'));