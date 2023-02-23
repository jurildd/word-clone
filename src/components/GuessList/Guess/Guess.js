import React from "react";
import { checkGuess } from '../../../game-helpers';

function Guess({ item, answer }) {

  const guessCheck = checkGuess(item, answer)

  const checker = (index) => {
    return item ? guessCheck[index].status : '';
  }
  return (
      <p className='guess'>
          {[...Array(5)].map((e, i) => (
            <span
              key={i}
              className={`cell ${checker(i)}`}
            >
              {item ? item[i] : ''}
            </span>
          ))}
      </p>
  );
}

export default Guess;
