// things that i need to do in this game
// need to able to enter an number
// need to render that number at the bottom
// generate a new number


//input data---
//select submit---
//start new game--
// get description

export const SUBMIT_NUMBER = 'SUBMIT_NUMBER';
export const submitNumber = (number) => ({
    type: SUBMIT_NUMBER,
    number
});



export const NUMBER_INPUT = 'NUMBER_INPUT';
export const numberInput = (value) => ({
    type: NUMBER_INPUT,
    value

});



export const START_NEW_GAME = 'START_NEW_GAME';
export const NewGame = (type) => ({
    type: START_NEW_GAME


});



export const WHAT_DESCRIPTION= 'WHAT_DESCRIPTION';
export const whatDecription = (type) => ({
    type: WHAT_DESCRIPTION,
});
