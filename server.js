const express = require('express');
const app = express();
const pokemonRouter = require('./server/routes/pokemon.router.js'); // Adjust path as needed
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/api/pokemon', pokemonRouter); // New route for Pokémon data

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
