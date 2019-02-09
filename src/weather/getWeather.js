import React, {Component} from 'react';

class GetWeather extends Component{

  render(){



    return(
        <div>
           {this.props.start &&
             this.props.hits.map(hits => (
             <div className="weather-list">
               <div key={hits.name}>City: {hits.name}</div>
               <div key={hits.main.temp}>Temperature: {Math.round(hits.main.temp - 273)} °C</div>
               <div key={hits.main.pressure}>Pressure: {hits.main.pressure} inHg</div>
               <div key={hits.wind.speed}>Wind: {hits.wind.speed} m/s</div>
               <div key={hits.main.humidity}>Humidity: {hits.main.humidity} %</div>
               <div key={hits.weather[0].main}>Weather: {hits.weather[0].main}</div>
             </div>
           ))}
        </div>
    )
  }
}

export default GetWeather;
