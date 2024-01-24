import React from "react";
import { Typography, Button, Container } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to My Pokémon Battle Game
      </Typography>
      <Typography variant="h5" gutterBottom>
        Choose your team and battle against others!
      </Typography>
      <Button variant="contained" color="primary" href="/team-selection">
        Build Your Team
      </Button>
      <Button variant="contained" color="secondary" href="/battle">
        Go to Battle
      </Button>
    </Container>
  );
};

export default Home;
