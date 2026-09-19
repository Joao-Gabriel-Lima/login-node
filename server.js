//Parte de coisas baixadas
const db = require('./database/database.js')
const bcrypt = require('bcrypt');
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const PORT = 5000
//Parte de coisas baixadas)

//rotas//
app.listen(PORT, () => {
    console.log("servidor rodando na porta 5000")
})

app.get('/', (req, res)=>{
    res.send("Servidor rodando")
})
//rotas//

//rota do registro//
app.post('/register',async (req, res) => {
    const {nome, email, senha} = req.body

//Parte da criptografia//
const saltRounds = 10
const senhaHash = await bcrypt.hash(senha, saltRounds)
//Parte da criptografia//

//Sql//
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
//Sql//
})
//rota do registro//

//---//

//rota do login//
app.post('/login', async (req,res)=>{
    const {email, senha} = req.body

const usuario = db.prepare('SELECT * FROM usuarios WHERE email = ?').get(email)
console.log(usuario)
if(!usuario){
    return res.status(401).json({ erro: "email ou senha inválidos" })
}

const senhaCorreta = await bcrypt.compare(senha, usuario.senha)
if(!senhaCorreta){
    return res.status(401).json({ erro: "email ou senha inválidos" })
}else{
    return res.status(200).json({ mensagem: "Email e senha válidos!" })
}
})
//rota do login//