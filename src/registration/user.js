import React, { Component } from 'react';

class User extends Component {
  constructor(props){
    super(props);
     this.submit = this.submit.bind(this);
  }

  submit(e){
    e.preventDefault();
    console.log(this.input.value);
    this.props.onSubmit(this.input.value);
    this.input.value = '';
  }

  render(){
    return(
    <div className="user">
      <form onSubmit={this.submit}>
        <input type="text" placeholder="Your name" ref={(input) => {this.input = input}}/>
        <button>Enter</button>
      </form>
    </div>
    )
  }
}


export default User;
