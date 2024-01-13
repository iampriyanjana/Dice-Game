import { useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import GamePlay from './components/GamePlay';

function App() {
  const [isGameStarted,setIsGameStarted]=useState(false);
  
  function toggleGamePlay(){
    setIsGameStarted((prev)=> !prev);
  }
  return (
    <div>
      {isGameStarted ? <GamePlay/> : <StartScreen toggle={toggleGamePlay}/>}
    </div>
  );
}

export default App;
