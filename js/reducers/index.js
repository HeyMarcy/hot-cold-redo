require('babel-polyfill');

import * as actions from '../actions/index';


const randomNum = function randomNumGenerator() {
	return Math.floor(Math.random() *100) +1;
};

const compareInputToRandom = function (submit, randomNum){
  let rangeMax = randomNum + 10;
  let rangeMin = randomNum -10;
  if (submit < rangeMax && submit > rangeMin){
    temperture = "You're Hot"
  } else if (submit > rangeMax || submit < rangeMin){
    temperture = "You're Cold"
  } else {
    temperture = "Invalid Input"
  };
  return temperture;
};


const initialHotColdAppState = {
	temperture:'Make your guess',
	randomNumber: 50,
	Input_number: 0,
	GuessHistory: [],
  whatDecription: false,
};


export const hotColdReducer = (state=initialHotColdAppState, currentAction) => {
  if (currentAction.type === actions.SUBMIT_NUMBER) {
    return {...state,
      Input_number: currentAction.number,
      GuessHistory: [...state.GuessHistory, currentAction.number]
    }
    // compareInputToRandom(actions.SUBMIT_NUMBER, randomNum))
    // .then(function(value){
    //   return {...state, temperture: value}
    // });
  }
  if(currentAction.type === actions.START_NEW_GAME){
    return {...state,
      Input_number: 0,
      randomNumber: 95,
      GuessHistory: []
    }
  }

    return state;
};
