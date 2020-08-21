import React from 'react';
import ReactDOM from 'react-dom';
import image from './profile.jpg';
import './index.css';
import App from './App';
import Main from './App.js';
import * as serviceWorker from './serviceWorker';


class SideNav extends React.Component {
  render() {
    return(
    	<div>
    	<div>
    	  <img  className="rounded-circle profile img-responsive" src={image} />
    	</div>
    	<div>
    	  <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact US</a>
    	</div>
    	</div>
    	);
  }
}


ReactDOM.render(<SideNav />, document.getElementsByClassName('sidenav')[0]);
ReactDOM.render(<App />, document.getElementsByClassName('main')[0]);


