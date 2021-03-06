import React from 'react';
import ReactDOM , {render}from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// 全局的公共样式 
import "./styles/index.scss"; 

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));  // 渲染 DOM 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
