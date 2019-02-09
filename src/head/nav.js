import React, { Component } from 'react';

import HeadRouter from "./router";
import Logo from './logo';


class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isHide: false,
      base: true
    };
    this.hideBar = this.hideBar.bind(this)
  }
  hideBar(){
     let {isHide} = this.state;
     let {base} = this.state;
     let scroll = window.scrollY;

     scroll > this.prev ?
     !isHide && this.setState({isHide:true})
     :
     isHide && this.setState({isHide:false});

     scroll < 120 ?
     !base && this.setState({base:true})
     :
     base && this.setState({base:false})

     this.prev = scroll;
  }
  componentDidMount(){
      window.addEventListener('scroll',this.hideBar);
  }
  componentWillUnmount(){
       window.removeEventListener('scroll',this.hideBar);
  }

  render(){
    return(
     <div>
       <Logo />
       <HeadRouter style = {{
         top: this.state.isHide ? '-100px' : '0px',
         background: this.state.base ? 'white' : '#381c75',
         padding: this.state.base ? '2%' : '1%'
       }}
       style_a = {{
         color: this.state.base ? '#381c75' : 'white'
       }}
        src = {
          this.state.base ? '' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu614lvCsQEQc9BQtMzI4hL5JdiacBi5eGItkqDL-sCS_7_h8RLw'
        }
        style_img = {{
          top: this.state.isHide ? '-100px' : '2.3%',
        }}
       />
      </div>
    )
  }
}

export default Navigation;
