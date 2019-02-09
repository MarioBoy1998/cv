import React from 'react';


const Form = props => (
      <form onSubmit = {props.getSearch}>

        <input className="weather-input"
          onChange={props.handleInputChange}
          value={props.weather}
          type="text"
          placeholder="City" />

        <button className="get-weather">Get weather</button>

      </form>
  );




export default Form;
