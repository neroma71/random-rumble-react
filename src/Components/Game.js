import React from 'react';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';
import GameOver from './GameOver';
import { useSelector } from 'react-redux';
import PlayerLoose from './PlayerLoose';

const App = () => {
  const gameOver = useSelector((state) => state.fight.gameOver);

  return (
    <div className="App">
      {gameOver === "go" ?(
        <>
          <Monster />
          <br></br>
          <section className="container-fluid">
            <PlayerList />
          </section>
        </>
      ): gameOver === "victoire" ?(
      <GameOver />
      ):(
        <PlayerLoose />
      )}
    </div>
  );
};

export default App;
