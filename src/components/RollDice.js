import styled from 'styled-components';

function RollDice({rollDice,currentDice}) {



  return (
    <DiceContainer>
        <div className='dice' onClick={rollDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice"/>
        </div>
        <p>Click on the Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer=styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;

    p{
        font-size: 24px;}
    
    .dice{
        cursor: pointer;
    }
    .dice img{
      width: 130px;
      height: 130px;
    }
`;