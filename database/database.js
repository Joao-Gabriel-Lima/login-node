const path = require('path')
const Database = require('better-sqlite3');
const db = new Database(path.join(__dirname, 'usuarios.db'));

db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT UNIQUE,
    senha TEXT)`)

module.exports = db