import React,{useState} from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RollDice from './RollDice';
import Rules from './Rules';

function GamePlay() {
    const [score,setScore] =useState(0);
    const [selectedNumber,setSelectedNumber]=useState();
    const [currentDice,setCurrentDice]=useState(1);
    const [error,setError]=   useState();
    const [showRules,setShowRules] =useState(false);

    const generateRandomNumber = (min,max)=>{
        return Math.floor(Math.random()*(max-min)+min);
      };
    
      const rollDice=()=>{
        const randomNumber=generateRandomNumber(1,7);
        setCurrentDice((prev)=>randomNumber);
        
        if(!selectedNumber){
            setError("You have not selected any number");
            return;
        }
        setError("");
        if(selectedNumber===randomNumber){
            setScore((prev)=> (prev+randomNumber));
        }
        else{
            setScore((prev)=>prev-2);
        }
        setSelectedNumber(undefined);
      };

      const resetScore=()=>{
        setScore(0);
      }
  return (
    <MainContainer>
        <div className='top_section'>
            <TotalScore score={score}/>
            <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}/>
        </div>
        <RollDice currentDice={currentDice} rollDice={rollDice}/>
        <div className='btns'>
          <Button onClick={resetScore}>Reset</Button>
          <Button onClick={()=>setShowRules((prev)=>!prev)}>{showRules?"Hide":"Show"} Rules</Button>
        </div>
        {showRules && <Rules/>}
     </MainContainer>
  )
}

export default GamePlay;

const MainContainer=styled.main`
   .top_section{
    display: flex;
    justify-content: space-between;
    align-items: end;
   }
   .btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 220px;
    /* gap: 1px; */
   }
`;
const Button = styled.button`
   background-color: black;
   color: white;
   width: 220px;
   height: 34px;
   border-radius: 5px;
   border: none;
   padding: 10px 18px 10px 18px;
   margin-top: 10px;
   margin-left: 1060px;
   border: 1 px solid transparent;
   transition: 0.4s background ease-in;
   cursor: pointer;

   &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
   }
`;