const express = require('express');
const router = express.Router();
const pool = require('../db');

// Регистрация участника
router.post('/register', async (req, res) => {
    const { username, password, role } = req.body;
    const result = await pool.query(
        'INSERT INTO users (username, password, role) VALUES ($1, $2, $3) RETURNING *',
        [username, password, role]
    );
    res.json(result.rows[0]);
});

module.exports = router;
