import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import Guess from './Guess';

function GuessList({ guessList, answer }) {

  const getItem = (index) => {
    return guessList[index] ? guessList[index].guess : '';
  }

  const getKey = (index) => {
    return guessList[index] ? guessList[index].id : index;
  }
  return (
      <div className='guess-results'>
          {[...Array(NUM_OF_GUESSES_ALLOWED)].map((e, i) => (
            <Guess key={getKey(i)} item={getItem(i)} answer={answer} />
          ))}
      </div>
  );
}

export default GuessList;
