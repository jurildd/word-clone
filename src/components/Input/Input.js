import React from "react";

function Input({ submitGuess, disabled }) {
  const [guess, setGuess] = React.useState('');
  return (
      <form
          className='guess-input-wrapper'
          onSubmit={(event) => {
              event.preventDefault();
              submitGuess(guess);
              setGuess('');
          }}
      >
          <label htmlFor='guess-input'>Enter guess:</label>
          <input
              id='guess-input'
              type='text'
              value={guess}
              pattern='[A-Z]{5}'
              minLength={5}
              maxLength={5}
              title="Random 5-letter word"
              disabled={disabled}
              onChange={(event) => {
                  setGuess(event.target.value.toUpperCase());
              }}
          />
      </form>
  );
}

export default Input;
