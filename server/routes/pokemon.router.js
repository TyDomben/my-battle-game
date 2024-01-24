// pokemon.router.js
const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js"); // path to pool file

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const queryText = "SELECT * FROM characters WHERE id = $1";
    const result = await pool.query(queryText, [id]);
    if (result.rows.length === 0) {
      return res.status(404).send("Character not found");
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM characters");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
