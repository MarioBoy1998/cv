import React, {Component} from 'react';

import titles from '../arrays/titles';

import Arrow from './arrow';

class Header extends Component{
  constructor(props){
    super(props);
     this.state = {
       title: "boom"
     }
  }

  componentDidMount(){
    let i = 0;
    this.titleChange = setInterval(() => {
        this.setState({title: titles[i]});
      if(i < titles.length - 1){
        i ++;
      } else {
        i = 0;
      }

    }, 4000)
  }

  componentWillUnmount(){
    clearInterval(this.titleChange)
  }

  render(){
    return(
      <div className="header">

        <h1 className="make">Make</h1>
          <br />
        <h1 className="something">Something</h1>
          <br />
        <h1 className="title">{this.state.title}</h1>
        <Arrow />

      </div>
    )
  }
}


export default Header;
