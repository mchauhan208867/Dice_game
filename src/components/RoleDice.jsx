import React, { useState } from "react";
import styled from "styled-components"

const RoleDice = ({currentDice,rollDice}) => {
  
  
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="logo" />
      </div>
      <p>
        Click on Dice to roll
      </p>
      
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer= styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;
.dice{
  cursor: pointer;
}

`;

