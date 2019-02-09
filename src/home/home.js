import React, { Component } from 'react';
import $ from 'jquery';

import Header from './header';
import Pic from './pic';
import Info from './info';
import Musicians from './musicians';

class Home extends Component{
  constructor(props){
    super(props);

  }
  componentDidMount() {
     window.addEventListener('scroll', this.handleScroll);
   }

   componentWillUnmount() {
     window.removeEventListener('scroll', this.handleScroll);
   }


   handleScroll = () => {

     $('.fade').each( function(){

                 let object = $(this).position().top;
                 let scrollTop = $(window).scrollTop();

                 if(scrollTop > object - 400){

                     $(this).css({
                       'animation-play-state':'initial'
                     });

                 }

             });
   };


  render(){

    return(
      <div>
        <Header />
        <Pic />
        <Info />
        <Musicians />
      </div>
    )
  }
}

export default Home;
