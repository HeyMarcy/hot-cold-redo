import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';


export function SubmitNumber(props) {
    let submitNumber;
  return (
    <form id="form" className="submit-number" onSubmit={e => {
            e.preventDefault();
            props.dispatch(actions.submitNumber(submitNumber.value));
            const form = document.getElementById('form');
            form.reset();}}>
        <input ref={ref => submitNumber=ref} type="text" placeholder="Enter Your Guess" maxLength="3" required />
        <input type="submit" value="guess"/>
    </form>
  );
}

export default connect()(SubmitNumber);
