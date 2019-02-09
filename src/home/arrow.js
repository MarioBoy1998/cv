import React, {Component} from 'react';

class Arrow extends Component {
  constructor() {
    super();
    this.scrollDown = this.scrollDown.bind(this);
  }

  scrollDown() {
    window.scrollTo({
       top: 1000,
       behavior: "smooth"
      })
  }


  render(){

      return(
        <div className="arrow" onClick = {this.scrollDown}>
          <span>
            <p>To the content</p>
          </span>

          <svg xmlns="http://www.w3.org/2000/svg"
                width="137px" height="19px" viewBox="0 0 267.4 47.8" transform="rotate(90)" aria-labelledby="title" data-reactid="123">
                <path fill="#d0d0d0" d="M243.1,47.8l-4.3-4.2l17-16.7H0v-6h255.8c-2.3-2.3-4.7-4.6-7-6.9c-3.3-3.3-6.5-6.4-9.3-9.1l-0.7-0.7l4.3-4.2 l0.7,0.7c2.8,2.8,7.1,6.9,11.3,11.1c4.3,4.3,8.7,8.5,11.6,11.4l0.7,0.7L243.1,47.8z" data-reactid="124">
                  </path>
                  <path fill="#d0d0d0" d="M243.1,46.4L266,23.9c-5.7-5.6-17.1-16.9-22.9-22.5l-2.9,2.8c5.2,5.1,12,11.8,18,17.7H1v4h257.2l-18,17.7 L243.1,46.4L243.1,46.4z" data-reactid="125">
                </path>
           </svg>

        </div>
      )
   }
}

export default Arrow;
