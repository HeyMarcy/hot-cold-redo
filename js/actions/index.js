// things that i need to do in this game 
// need to able to enter an number 
// need to render that number at the bottom
// generate a new number


//input data---
//select submit---
//start new game--
// get description

export const GUESS_NUMBER_ON_SUBMIT = 'GUESS_NUMBER_ON_SUBMIT';
export const guessNumber = number => ({
    type: GUESS_NUMBER_ON_SUBMIT,
    number
});



export const ENTER_NUMBER_DATA = 'ENTER_NUMBER_DATA';
export const Input_number = (value) => ({
    type: ENTER_NUMBER_DATA,
    value
    
});



export const START_NEW_GAME_BTN = 'START_NEW_GAME_BTN';
export const NewGame = () => ({
    type: START_NEW_GAME_BTN,
    
    
});



export const WHAT_DESCRIPTION_BTN = 'WHAT_DESCRIPTION_BTN';
export const decriptionBtn = () => ({
    type: WHAT_DESCRIPTION_BTN,
    
    
});