import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/bootstrap-theme.min.css'
import 'main.css';
import App from './App';
import registerServiceWorker from 'registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
