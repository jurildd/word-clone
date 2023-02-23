import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Input from '../Input';
import GuessList from '../GuessList';
import WinBanner from '../WinBanner';
import LoseBanner from '../LoseBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('playing');

  const submitGuess = (guess) => {
    const newGuess = {
      guess,
      id: Math.random()
    }
    const newGuessList = [...guessList, newGuess];
    setGuessList(newGuessList);

    if (guess === answer) {
      setGameStatus('win');
      return;
    }
    if (newGuessList.length >= 6) {
      setGameStatus('lose');
    }
  }

  return (
      <>
        <GuessList guessList={guessList} answer={answer} />
        <Input submitGuess={submitGuess} disabled={gameStatus !== 'playing'} />
        {gameStatus === 'win' && <WinBanner count={guessList.length} />}
        {gameStatus === 'lose' && <LoseBanner answer={answer} />}
      </>
  );
}

export default Game;
