import React from 'react';
import ReactDOM from 'react-dom';
import Gursheen from './App.jsx';
import Movie from './Movies.jsx';
import UserApp from './UserApp.jsx';
import WeatherApp from './WeatherApp.jsx';
import UploadInvoice from './UploadInvoice.jsx';
import {createStore} from 'redux';
import allReducers from './reducers/index.jsx'
import {Provider} from 'react-redux';
import Modal from 'react-modal';
//import './node_modules/bootstrap/dist/css/bootstrap.css';

import Board from './Board.jsx';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store = {store}>
<UploadInvoice />
</Provider>
, document.getElementById('app'));