import React, { Component } from 'react';

import Form from './form';
import GetWeather from './getWeather';
import Info from './info'
import pic from '../arrays/weather';
import HeadRouter from '../head/router';

const API_KEY = "2507dbdd9241448878151c41bfa5cd2e";

class Weather extends Component {
 constructor(props){
   super(props);
   this.state = {
     result: {},
     weather: '',
     start: false,
     src: 'https://image.freepik.com/free-photo/no-translate-detected_23-2147756833.jpg'
   }
 }

componentDidMount(){
  const {weather} = this.state;
  this.fetchData(weather);
}

fetchData = (weather) => {
  fetch (`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=${API_KEY}`)
    .then(res => res.json())
    .then(result => this.setNews(result))
    .catch(error => error);
}

handleInputChange = ({target : {value}}) => {

  function ucFirst(str) {
  if (!str) return str;

    var spart = str.split(" ");
    for ( var i = 0; i < spart.length; i++ ){
          var j = spart[i].charAt(0).toUpperCase();
          spart[i] = j + spart[i].substr(1);
    }
  return spart.join(" ");

}

  this.setState({
    weather: ucFirst(value)
  })
  this.setState({
    start: false
  });
}

getSearch = (e) => {
   e.preventDefault();

    const {weather} = this.state;
    this.fetchData(weather);
}

setNews = result => {
  this.setState({
    result: result
  })

  if(this.state.result.name === this.state.weather){
    this.setState({
      start: true
    });
  }

 if(this.state.start === true){
   let weatherPic = this.state.result.weather[0].main.toLowerCase();
   let source = pic[weatherPic];
     this.setState({
       src: source
     })
 }
}

  render(){

    const {weather, result} = this.state;
    var hits = [result];

    console.log(hits);
    console.log(weather);
    console.log(this.state.src);

    return(
      <div className = "wrapper">

        <div className ="weather-row">

        <div className="weather-info" style = {{backgroundImage: `url(${this.state.src})`}} >
          <Info />
        </div>

        <div className = "weather-form">
          <Form getSearch = {this.getSearch}
                handleInputChange = {this.handleInputChange}
                weather= {weather}
          />

          <GetWeather
                hits = {hits}
                start = {this.state.start}
           />
        </div>

      </div>
      </div>
    )
  }
}


export default Weather;
