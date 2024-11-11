const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());
const JWT_SECRET = 'asdasd';
const PORT = 5000;

// Регистрация пользователя
app.post('/register', async (req, res) => {
    const { role, username, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await pool.query(
        'INSERT INTO users (role, username, password) VALUES ($1, $2, $3) RETURNING *',
        [role, username, hashedPassword]
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: 'Ошибка при регистрации' });
    }
  });
  
  // Авторизация пользователя
  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
      const user = result.rows[0];
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
      } else {
        res.status(401).json({ error: 'Неверные учетные данные' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Ошибка при авторизации' });
    }
  });
  
  // Получение списка событий
  app.get('/events', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM events');
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ error: 'Ошибка при получении событий' });
    }
  });
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
