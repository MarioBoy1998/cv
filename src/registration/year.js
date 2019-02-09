import React, { Component } from 'react';
import $ from 'jquery';

class Year extends Component {
  constructor(props){
    super(props);
     this.yearChange = this.yearChange.bind(this);
  }


  yearChange(event){
    this.props.onYearChange( event.target.textContent );
  }


  render(){
    $(document).on('click', '.year .yearBtn',
    function(){
      $(this).addClass('active').siblings().removeClass('active');
    }
  )
    return(
    <div className="year">

      <button className="yearBtn"  onClick={this.yearChange}>'80</button>
      <button className="yearBtn" onClick={this.yearChange}>'90</button>
      <button className="yearBtn" onClick={this.yearChange}>'00</button>

    </div>
    )
  }
}


export default Year;
