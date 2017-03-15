require('babel-polyfill');

import * as actions from '../actions/index';

// State Values:
//   feedback (compare to random)
//   target number (random)
//   input number
//   guess history
//   instuctions/information

const initialHotColdAppState = {
	howClose:'Make your guess',
	randomNumber: 50,
	Input_number: 0,
	GuessHistory: [],
  whatDecription: false,
};


const compareInputToRandom = function (submit, randomNum){
  let rangeMax = randomNum + 10;
  let rangeMin = randomNum -10;
  if (submit === randomNum){
    return "You Win!"
  } else if (submit < rangeMax && submit > rangeMin){
     return "You're Hot"
  } else if (submit > rangeMax || submit < rangeMin){
    return "You're Cold"
  }
    return "Invalid Input"
};


export default (state=initialHotColdAppState, currentAction) => {
  if (currentAction.type === actions.SUBMIT_NUMBER) {
    let closenessDescription = compareInputToRandom(currentAction.number, state.randomNumber);
    return {...state,
      Input_number: currentAction.number,
      GuessHistory: [...state.GuessHistory, currentAction.number],
      howClose: closenessDescription
    }
  }
  if(currentAction.type === actions.START_NEW_GAME){
    return {...state,
      Input_number: 0,
      randomNumber: currentAction.randomNum,
      GuessHistory: [],
      howClose:0
    }
  }
    return state;
};
