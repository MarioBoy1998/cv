import React, {Component} from 'react';

class Tooltip extends Component{
  constructor(props){
    super(props);
    this.state = {
      opacity: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    this.setState({
      opacity: !this.state.opacity
    })
  }

  render(){

    let style = {
      opacity: this.state.opacity ? 1 : 0
    }

    return(
        <div>

        <div style={style} className="tooltip">
          {this.props.text}
        </div>

          <span className="info-content-inner" onMouseEnter= {this.toggle} onMouseOut = {this.toggle}>
             {this.props.children}
          </span>

        </div>

    )
  }
}

export default Tooltip;
