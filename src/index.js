import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import MiniProject from './miniProject/MiniProject';
import MiniProjectWithJsonDB from './miniProjectWithJsonDB/App';

ReactDOM.render(
  < React.StrictMode >
    {/* <App /> */}
    {/* <MiniProject /> */}
    <MiniProjectWithJsonDB />
  </React.StrictMode >,
  document.getElementById('root')
);
