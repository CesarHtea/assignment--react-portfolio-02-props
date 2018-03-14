import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import {skills, eduList, jobsList} from './data/datasource'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
