import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// **IF USING REDUX (set up configureStore.js)**
// const store = configureStore();

// const jsx = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// );

// **IF NOT USING REDUX**
const jsx = (
    <AppRouter />
);

ReactDOM.render(jsx, document.getElementById('app'));
