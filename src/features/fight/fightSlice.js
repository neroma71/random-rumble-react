import { createSlice } from '@reduxjs/toolkit';
import monstre2 from '../../Components/images/monstre2.jpg';
import monstre3 from '../../Components/images/monstre3.jpg';
import monstre4 from '../../Components/images/monstre4.jpg';
import monstre5 from '../../Components/images/monstre5.jpg';

const initialState = {
  players: 
  [
     { 
      name: "John",
       pv: 100, 
       pvMax: 100,
       mana: 30, 
       manaMax: 30, 
       id: 1, 
       canPlay: true, 
       image: {
      picture: monstre2
     } 
    },
     {
      name: "Jack", 
      pv: 100, 
      pvMax: 100,
       mana: 30, 
       manaMax: 30, 
       id: 2,  
       canPlay: true,
       image:{
       picture: monstre3
       }
      },
     { 
      name: "Jessy",
      pv: 100,
       pvMax: 100,
        mana: 30, 
        manaMax: 30, 
        id: 3,  
        canPlay: true,
        image:{
        picture: monstre4
          }
      },
     { name: "Jenny", 
     pv: 100, 
     pvMax: 100, 
     mana: 30, 
     manaMax: 30,
     id: 4, 
     canPlay: true,
     image:{
      picture: monstre4
        }
    }
  ],
  monster: {
    pv: 800,
    pvMax: 800
  }, 
  gameOver: "go",
  currentTurn: 0,
  playerPlayed: 0,
 
}

export const fightSlice = createSlice({
  name: 'fight',
  initialState,
  reducers: {
    hitMonster: (state, action) => {
      state.monster.pv -= action.payload.monsterDecreasePv;
      if(state.monster.pv <= 0 ){
        state.gameOver = "victoire";
       }
    },
    hitBack: (state, action)=>{
      const playerHit = action.payload.playerHit;
      state.players[playerHit].pv -= action.payload.playerDecreasePv;

      if(state.players.every(player => player.canPlay === state.currentTurn + 1)){
        state.currentTurn += 1;
      }
      if (state.players.every(player => player.pv <= 0)) {
        state.gameOver = "défaite";
      }
    },
    endOfTurn: (state, action) =>{
      state.players[action.payload.player].canPlay = false;
      if(state.playerPlayed + 1 === state.players.length){
        state.playerPlayed = 0;
        state.players.forEach(player =>{
          player.canPlay = true;
        })
      }
      else{
        state.playerPlayed += 1;
      }
    },
    resetGame: (state) =>{
      return initialState;
    },
    // fin du slice
  },
});

export const { hitMonster, hitBack, resetGame, endOfTurn } = fightSlice.actions;

export default fightSlice.reducer;
