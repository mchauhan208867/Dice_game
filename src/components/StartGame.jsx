import styled from "styled-components";
import { Button } from "../styles/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
       <div>
       <img src="/images/dice.png" alt="" />
        </div> 
      
      <div className="content">
        <h1>Dice game</h1>
        <Button onClick={toggle} >Play now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
  .content{
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
  }
`;



