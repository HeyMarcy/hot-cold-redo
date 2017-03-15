import React from 'react';
import {connect} from 'react-redux';

export function GuessHistory(props){
  return(
    <div>{props.guessHistory.join(', ')}</div>
  )
}
const mapStateToProps = (state, props)=>({
  guessHistory: state.GuessHistory
});

export default connect(mapStateToProps)(GuessHistory);
