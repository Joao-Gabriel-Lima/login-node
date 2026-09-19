//Parte de coisas baixadas
const db = require('./database/database.js')
const bcrypt = require('bcrypt');
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const PORT = 5000
//Parte de coisas baixadas)

app.listen(PORT, () => {
    console.log("servidor rodando na porta 5000")
})

app.get('/', (req, res)=>{
    res.send("Servidor rodando")
})

app.post('/register',async (req, res) => {
    const {nome, email, senha} = req.body

//Parte da criptografia
const saltRounds = 10
const senhaHash = await bcrypt.hash(senha, saltRounds)
//Parte da criptografia

//Sql
try{
db.prepare('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)').run(nome, email, senhaHash)
const resultado = db.prepare('SELECT * FROM usuarios').all()
console.log(resultado)
res.status(201).json({mensagem:"Usuário criado com sucesso!"})
} catch (erro) {
    if(erro.code == 'SQLITE_CONSTRAINT_UNIQUE'){
        res.status(409).json({erro:"O usuário ja existe!"})
    }else{
        res.status(500).json({ServerError:"Erro no servidor!"})
    }
}
//Sql
})