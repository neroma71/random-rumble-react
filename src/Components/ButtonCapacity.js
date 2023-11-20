import React from 'react';
import { useDispatch } from 'react-redux';
import { hitMonster, hitBack, endOfTurn } from '../features/fight/fightSlice';



const ButtonCapacity = ({ playerId, playerPv, canPlay,}) =>{

const dispatch = useDispatch();
const combat = () => {
    if(playerPv > 0){
      dispatch(hitMonster({
        monsterDecreasePv:Math.round(Math.random() * (10  - 1) ),
      }));
      dispatch(hitBack({
        playerHit: playerId - 1,
        playerDecreasePv: 5,
      }));
      dispatch(endOfTurn({
        player: playerId - 1,
      }));
    }

};

return (
  <>
  {canPlay ? 
  <button onClick={() => combat()} className={`btn btn-success material-tooltip-main`}   >
                hit
            <i className="fas fa-bomb"></i> 5
            <i className="fas fa-fire-alt"></i> - 5
            
    </button>
    : <button disabled>
      <i className="fas fa-bomb"></i> 5
      <i className="fas fa-fire-alt"></i> - 5
    </button>
  }
  </>
        );
 }



export default ButtonCapacity;