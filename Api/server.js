    const express = require('express');
    const sqlite3 = require('sqlite3').verbose();
    const bcrypt = require('bcrypt');
    const { v4 : uuidv4 } = require('uuid');
    const cors = require('cors');

    const app = express();
    const PORT = 3001;

    app.use(cors());
    app.use(express.json());

    const db = new sqlite3.Database('./ngilo.db', (err) => {
        if (err) {
            console.error('The server is not connect to the database', err.message);
        } else {
            console.log('Connected to the SQLite database.');
        }
    });

    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            username TEXT UNIQUE,
            password TEXT,
            gender TEXT,
            age INTEGER
        )
    `, (err) => {
        if (err) 
            console.error('Error creating users table', err.message);
        });
    
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });