import React, {Component} from 'react';

import Tooltip from './tooltip';

const Info = props => (

  <div className="info">
    <h1 className="info-top" ref={props.fade}>Design inspiring visual brands & online experiences for forward-thinking clients.</h1>
      <div className="info-content" ref={props.fade}>

        <Tooltip text="sljfe veljvte "><h1>Web Development</h1></Tooltip><span id="plus">+</span>
        <Tooltip text="v4tg4 gt4g "><h1> Interactive Design</h1></Tooltip><span id="plus">+</span>
        <Tooltip text="tbrrvtgre vre"><h1> Interface Development</h1></Tooltip><span id="plus">+</span>
        <Tooltip text="vevecdwr e"><h1> Responsive Design</h1></Tooltip>

      </div>
    <h1 className="info-bottom" ref={props.fade}>MORE THAN JUST CREATIVE</h1>
  </div>
)




export default Info;
