import React from 'react';
import styled from 'styled-components'

function StartScreen({toggle}) {
  return (
    <Container>
        <img src="./images/dices 1.png" alt="dices" className='image'/>
        <div className='content'>
          <h1>DICE GAME</h1>
          <Button onClick={toggle}>Play Now
          </Button>
        </div>

    </Container>
  );
}

export default StartScreen;

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   max-width: 1180px;
   margin: 10px;

   .content h1{
      font-size: 96px;
      height: 100px;
   }
`;

const Button = styled.button`
   background-color: black;
   color: white;
   width: 220px;
   height: 44px;
   border-radius: 5px;
   border: none;
   padding: 10px 18px 10px 18px;
   margin-top: 20px;
   margin-left: 305px;
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