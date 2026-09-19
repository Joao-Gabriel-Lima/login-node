const Database = require('better-sqlite3');
const db = new Database('usuarios.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT UNIQUE,
    senha TEXT)`)

module.exports = db