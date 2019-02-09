import React, {Component} from 'react';

import Background from './bg';

export default class BgList extends Component {
  constructor(props){
    super(props);
    this.bgChange = this.bgChange.bind(this);
  }
  bgChange(event){
    console.log(event.target.getAttribute("back"));
    this.props.onBgChange(event.target.getAttribute("back"));
    this.props.onIdChange(event.target.getAttribute("id"));
  }

  render(){
  return(
    <div className="bgList">
         {this.props.bg.map(bg =>
            <div  key={bg.id}><Background bgChange={this.bgChange} bg = {bg}/></div>
          )}
    </div>
  )
}
}
