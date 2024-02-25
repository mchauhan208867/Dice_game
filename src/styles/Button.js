import styled from "styled-components";
export const Button = styled.button`
  color: #ffffff;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: 1px solid transparent;
  font-size: 16px;
  transition: 0.5s background ease-in;
  &:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;

  }
`;
export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
&:hover{
    background-color: black;
    color: white;
    border: 1px solid transparent;
    

  }
`;