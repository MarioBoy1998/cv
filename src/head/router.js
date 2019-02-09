import React, { Component } from 'react';
import {Router, Route, Link} from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";

import Home from "../home/home";
import Weather from "../weather/weather";
import Registration from "../registration/registration";

const history = createBrowserHistory();


class HeadRouter extends React.Component {
  render(){
    return(

      <Router history = {history}>
        <div>
           <div style={this.props.style_img} className="sticky-logo"><img src={this.props.src} /></div>
        <div className="navigation" style={this.props.style}>

            <div><Link style={this.props.style_a} to="/">Home</Link></div>
            <div><Link style={this.props.style_a} to="/registration">Registration</Link></div>
            <div><Link style={this.props.style_a} to="/weather">Weather</Link></div>
            </div>

          <Route exact path="/" component={Home}/>
          <Route path="/registration" component={Registration}/>
          <Route path="/weather" component={Weather}/>
        </div>
      </Router>

    )
  }
}

export default HeadRouter;
