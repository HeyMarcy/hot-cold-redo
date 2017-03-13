require('babel-polyfill');

import * as actions from './actions/index';


function GenerateRandomNumber() {

}



const initialHotColdAppState = {
	temperture:['Make your guess'],
	randomNumber: randomNumber,
	GuessNumber: 0,
	GuessHistory: [],
	DescriptionData:


};



export const repositoryReducer = (state=initialRepositoryState, action) => {

    if (action.type === guessNumber) {
        return [...state, {
            guessNumber: action.guessNumber
        }];
    }
    










    return state;
};