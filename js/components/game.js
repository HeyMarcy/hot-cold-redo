import React from 'react';

import SubmitNumber from './submitNumber';
import GuessHistory from './guessHistory';

export default function Game(props) {
  return (
    <div className="">
      <SubmitNumber />
      <GuessHistory />
    </div>
  );
}
