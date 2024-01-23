// pokemon.router.js
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js'); // path to pool file

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM characters');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
