import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons'
import {robots} from './Robots'

ReactDOM.render(
  <React.StrictMode>
      <div>
          <Card robot={robots[0]}/>
          <Card robot={robots[1]}/>
          <Card robot={robots[2]}/>
      </div>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
