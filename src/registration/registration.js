import React, { Component } from 'react';
import {connect} from 'react-redux';

import User from './user';
import BgList from './bgList';
import Year from './year';
import Final from './final';


import onSubmitAction from '../actions/onSubmitAction';
import onBgChangeAction from '../actions/onBgChangeAction';
import onYearChangeAction from '../actions/onYearChangeAction';
import onSourceChangeAction from '../actions/onSourceChangeAction';
import onIdChangeAction from '../actions/onIdChangeAction';

import bg from '../arrays/bg';
import songs from '../arrays/songs';

class Registration extends Component {
  render(){
    return(

      <div className="registrationContainer">

      <div>
        <img className="registrationBackground" src={this.props.background} />
      </div>

        <div>
         <User onSubmit = {this.props.onSubmit} user = {this.props.user} />
        </div>

        <div>
          <BgList bg = {bg} onBgChange = {this.props.onBgChange} onIdChange = {this.props.onIdChange}/>
        </div>

        <div>
          <Year onYearChange = {this.props.onYearChange} year = {this.props.year}/>
        </div>

        <div>
           <Final songs = {songs} year = {this.props.year}
            user = {this.props.user} source = {this.props.source}
            onSourceChange = {this.props.onSourceChange} id = {this.props.id}
             />
        </div>

      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    user: state.user,
    background: state.background,
    year: state.year,
    source: state.source,
    id: state.id
  }
}

function mapDispatchToProps(dispatch){
  return{
    onSubmit: name => {
      dispatch(onSubmitAction(name))
    },
    onBgChange: background => {
      dispatch(onBgChangeAction(background))
    },
    onIdChange: id => {
      dispatch(onIdChangeAction(id))
    },
    onYearChange: year => {
      dispatch(onYearChangeAction(year))
    },
    onSourceChange: source => {
      dispatch(onSourceChangeAction(source))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
