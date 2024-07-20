import React from "react";
import Cheeses from '../Components/Cheeses';
import styled from "styled-components";

const StyledHeader = styled.h1`
  color: black;
  text-align: center;
  font-family: "Brush Script M7", "Courier New", monospace;
  font-size: 50px;
  font-weight: bold;
  margin-top:0px;
  padding: 20px;
  background-color: white;  
`;

function App() {
  return (
    <div>
      <StyledHeader>
        SAY CHEESE PZZZZ
      </StyledHeader>
      <Cheeses/>
    </div>
  );
}

export default App;
