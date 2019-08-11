import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './application/serviceWorker';

import "./application/assets/scss/argon-design-system-react.scss";
import "@fortawesome/fontawesome-free/css/all.css";

import App from './application/components/App';

ReactDOM.render(<App/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
