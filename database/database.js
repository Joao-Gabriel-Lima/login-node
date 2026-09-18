const Database = require('better-sqlite3');
const db = new Database('usuarios.db');

const nome = "joao"
const email = "joao@gmail.com"
const senha = "jgls123"

db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT UNIQUE,
    senha TEXT)`)

db.prepare('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)').run(nome, email, senha)
const resultado = db.prepare('SELECT * FROM usuarios').all()
console.log(resultado)

module.exports = db