import React from 'react';
import PlayerCard from './PlayerCard';
import { useSelector } from 'react-redux';
import Loose from './Loose';
import monstre2 from './images/monstre2.jpg';
import monstre3 from './images/monstre3.jpg';
import monstre4 from './images/monstre4.jpg';
import monstre5 from './images/monstre5.jpg';

const PlayerList = () => {
  const players = useSelector((state) => state.fight.players);
  
 
  return (
    <>
    <div className='row_player'>
      {players.map((player, index) =>(
        player.pv ? <PlayerCard key={index} player={player}  className="card" /> : <Loose  player = {player}/>
      ))}
    </div>
  
 </>
    
  )
};

export default PlayerList;
