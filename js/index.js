require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Game from './components/Game';
import store from './store';
document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
      <Provider store={store}>
        <Game />
      </Provider>,
    document.getElementById('app'))
);


console.log(store.getState());

// document.addEventListener('DOMContentLoaded', () =>
//     ReactDOM.render(
//       <Provider store={store}>
//         <Game />
//       </Provider>,
//       document.getElementById('app'))
// );

// document.addEventListener('DOMContentLoaded', () =>
//     ReactDOM.render(
//         <Provider >
//             <Game />
//         </Provider>,
//         document.getElementById('app')
//     )
// );

//
// store.dispatch(actions.NewGame());
// store.dispatch(actions.submitNumber(4));
// console.log(store.getState());
// store.dispatch(actions.submitNumber(2));
// console.log(store.getState());
//
// store.dispatch(actions.NewGame());
// store.dispatch(actions.submitNumber(42));
