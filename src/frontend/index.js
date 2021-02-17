/* index.js
*
    Imports the main client application and renders into the React DOM.

*
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

ReactDOM.render(<App/>, document.getElementById('root'));
