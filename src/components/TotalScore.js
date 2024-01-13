import styled from "styled-components"

function TotalScore({score}) {
  return (
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total score</p>
        </ScoreContainer>
  )
}

export default TotalScore;

const ScoreContainer=styled.div`
    max-width: 200px;
    text-align: center;
    h1{
        font-size: 80px;
        line-height: 70px;
    }
    p{
        font-size: 20px;
        font-weight: 500px;
    }
`;