import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class SubmitNumber extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
      this.state = {
        input: ''
      }
  };
  handleClick(e) {
    e.preventDefault();
    this.props.dispatch(actions.submitNumber(this.submitNumber.value))
    this.submitNumber.value="";
  }
  render(){
    return (

      <form id="form" className="submit-number" onSubmit={this.handleClick}>
          <input ref={ref => this.submitNumber=ref} type="text" placeholder="Enter Your Guess" maxLength="3" required />
          <input type="submit" value="guess"/>
      </form>
    )
  };
}

export default connect()(SubmitNumber);
