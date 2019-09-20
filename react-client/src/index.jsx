import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { ParallaxProvider } from 'react-scroll-parallax';


ReactDOM.render(<ParallaxProvider><App /></ParallaxProvider>, document.getElementById('app'));

