import React from 'react';
import { useDispatch } from 'react-redux';
import { resetGame } from '../features/fight/fightSlice';

const PlayerLoose= () => {
    const dispatch = useDispatch();

    const handleResetGame = () => {
        dispatch(resetGame());
      };

    return(
        <div className="monsterloose">
            <h1>vous avez perdu !</h1>
            <button onClick={handleResetGame}>Recommencer la partie</button>
        </div>
    )
}
export default PlayerLoose;