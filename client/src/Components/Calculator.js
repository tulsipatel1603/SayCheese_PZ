import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

const StyledInput = styled("input")`
  font-size: 15px;
  padding: 6px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid black;
  text-align: center;
  width: 180px;
`;

const StyledHeader = styled("h2")`
  font-family: Serif;
  font-size: 30px;
  text-align: center;
  margin-top:50px;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
`;

const StyledForm = styled("form")`
  border: 3px solid black;
  border-radius: 10px;
  background-color: white;
  width: 320px;
  padding: 5px 10px;
  padding-top: 20px;
`;

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Component to display the result of the calculation
const CalculatorResult = ({ inputWeight, cheesePrice }) => {
  const result = cheesePrice * (inputWeight);
  return <div style={{ fontWeight: "bold", textAlign: "center", marginTop: "20px", color:"green"}}>Total: ${result.toFixed(2)}</div>;
};

// Main Calculator component
const Calculator = () => {
  const [cheeses, setCheeses] = useState([]);
  const [selectedCheese, setSelectedCheese] = useState("");
  const [enteredCheeseWeight, setEnteredCheeseWeight] = useState(0);
  const [cheesePrice, setCheesePrice] = useState(0);

  // Fetch cheeses data from API on component mount
  useEffect(() => {
    const fetchCheeses = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      setCheeses(data.cheeses || []); // Update state with fetched cheese data
    };

    fetchCheeses();
  }, []); // Empty dependency array means this effect runs once on mount

  // Update cheese price when selected cheese or list of cheeses changes
  useEffect(() => {
    const cheese = cheeses.find(cheese => cheese.name === selectedCheese);
    setCheesePrice(cheese ? cheese.price : 0); // Set the price of the selected cheese
  }, [selectedCheese, cheeses]); // Dependencies: selectedCheese and cheeses

  return (
    <Container>
      <div>
        <StyledHeader>CALCULATOR</StyledHeader>
        <StyledForm>
          <div>
            <h4 style={{ margin: 0, padding: "8px" }}>Cheese: <select
              style={{ textAlign: "center", marginLeft: "30px", width: "196px", fontSize: "15px", borderRadius: "5px", padding: "6px", marginBottom: "8px", border: "1px solid black" }}
              onChange={(e) => setSelectedCheese(e.target.value)} // Update selected cheese on change
              value={selectedCheese}
            >
              <option value="">Select the Cheese</option>
              {cheeses.map((cheese, i) => (
                <option key={i} value={cheese.name}>
                  {cheese.name}
                </option>
              ))}
            </select></h4>
            
          </div>
          <label style={{ fontWeight: "bold" }}>Weight (kg): </label>
          <StyledInput
            onChange={(e) => setEnteredCheeseWeight(e.target.value)} // Update entered weight on change
            value={enteredCheeseWeight}
            type="number"
          />
          <CalculatorResult inputWeight={enteredCheeseWeight} cheesePrice={cheesePrice} /> 
        </StyledForm>
      </div>
    </Container>
  );
};

export default Calculator; 
