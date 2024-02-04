const express = require('express');
const app = express();
const http = require('http');
const port = 4000;
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
require('dotenv').config()

app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.use((req, res, next)=>{
    res.on("finish",()=>{
        console.log(`${req.method} ${req.originalUrl} ${req.statusCode} `);
    });
    next();
});

app.post('/add-event', async (req, res) => {
    const { name, summary, description, category, start_date, end_date, image_urls } = req.body;
  
    const query = `
      INSERT INTO events (name, summary, description, category, start_date, end_date, image_urls)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;  // Returns the newly created event
    `;
  
    const values = [name, summary, description, category, start_date, end_date, image_urls];
  
    try {
      const result = await db.query(query, values);
      res.status(201).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/events', async (req, res) => {
    const query = 'SELECT * FROM events';
  
    try {
      const result = await db.query(query);
      res.status(200).json(result.rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  