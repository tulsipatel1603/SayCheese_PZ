import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, CircularProgress, Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import Calculator from "./Calculator";

// Component to display cheese details in a card
const CheeseItem = ({ name, price, image, colour }) => (
  <Card sx={{
    backgroundColor: "white",
    textAlign: "center",
    flex: '1 0 auto',
    maxWidth: 250,
    height: 250,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    border: "3px solid black"
  }}>
    <CardHeader
      title={name}
      sx={{ paddingBottom: 0 }}  
      subheader={`Price: $${price}/kg`}
      subheaderTypographyProps={{ sx: { fontSize: '15px', marginTop: '10px', padding: '0px'} }}  
    />
    <CardContent sx={{ padding: 0, paddingBottom: 2 }} >
      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '15px'}}>
        {`Colour: ${colour}`}
      </Typography>
    </CardContent>

    <CardMedia
      component="img"
      image={image}
      alt={name}
      sx={{
        height: 150,
        borderTop: "3px solid black"
      }}
    />

  </Card>
);

// Main component to fetch and display a list of cheeses
const Cheeses = () => {
  const [cheeses, setCheeses] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  // Fetch cheese data from API on component mount
  useEffect(() => {
    const fetchCheeses = async () => {
      try {
        const response = await fetch("/api");
        if (!response.ok) throw new Error("Could not fetch data");
        const { cheeses = [] } = await response.json();
        setCheeses(cheeses);
        setStatus("loaded");
      } catch (err) {
        setError(err.message);
        setStatus("error");
      }
    };

    fetchCheeses();
  }, []);

  // Render based on the fetch status
  if (status === "loading") {
    return (
      <Container>
        <CircularProgress />
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  if (status === "error") {
    return (
      <Container>
        <Typography color="error">Error: {error}</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Grid container spacing={2} direction="row" alignItems="stretch">
        {cheeses.map(({ id, name, price, colour, image }) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={id || name}>
            <CheeseItem
              name={name}
              price={price}
              colour={colour}
              image={image}
            />
          </Grid>
        ))}
      </Grid>
      <Calculator cheeses={cheeses} />
    </Container>
  );
};

export default Cheeses;
