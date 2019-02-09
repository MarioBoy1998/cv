import React, { Component } from 'react';
import $ from 'jquery';

import PopUp from './popUp';

class Final extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.finalBtn = this.finalBtn.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  finalBtn(){

    function find(array, search) {
    return array.filter(function(item) {
        return Object.keys(item).some(function(key) {
            return item[key] === search
        })
    })
};

    let user = this.props.user;
    let songYear = find(this.props.songs, `${this.props.year}`).map(song => {return song.year})[0];
    let songId = find(this.props.songs, `${this.props.id}`);
    let srcSong = find(songId,songYear).map(song => {return song.src}).join();

  console.log(`${this.props.id}`);

    if(songId && songYear && user){

      this.setState({
        isModalOpen: true
      });

      this.props.onSourceChange(srcSong);
      console.log(srcSong);

    }else{
      alert("Заполните все значения");
    }
  }


  closeModal(e) {
      if(e.target !== document.querySelector('.popUp')){
        console.log("close");
        this.setState({
          isModalOpen: false
        });
      }
  }

  render(){
    var hidden = {
      display: this.state.isModalOpen ? "block" : "none"
    };

    return(
      <div>

    <div className="final">
        <button onClick={this.finalBtn}>Let's go</button>
    </div>

     <div className="popUpContainer" style={ hidden } onClick={this.closeModal}>
        <PopUp user = {this.props.user} source = {this.props.source}/>
     </div>

    </div>
    )
  }
}


export default Final;
