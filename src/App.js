import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import Header from "@mui/material/CardHeader";
import PokemonDetails from './components/PokemonDetails'; // Import the details component

function App() {
  return (
    <Router>
      <div>
        <Header>"Hello"</Header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pokemon">Pokemon List</Link></li>
            <li><Link to="/pokemon/:id">Pokemon Details</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/pokemon" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
