//Parte das coisas baixadas e importantes//
const db = require('./database/database.js')
const bcrypt = require('bcrypt');
const express = require('express')
const session = require('express-session');
const env = require('dotenv').config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const PORT = process.env.PORT
app.use(express.static('public'))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000 * 30
    }
}))

//Parte das coisas baixadas e importantes//

//rotas//
app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`)
})

app.get('/', (req, res)=>{
    res.redirect('/login.html')
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
    req.session.userID = usuario.id
    return res.status(200).json({ mensagem: "Email e senha válidos!" })
}
})
//rota do login//

//middleware//
function estaLogado(req, res, next){
    if(req.session.userID){
        next()
    }else{
        res.status(401).json({erro: 'Não está logado'})
    }
}
//middleware//


//rota de dashboard//

app.get('/dashboard', estaLogado, (req, res)=>{
    res.send('Você está logado')
})

//rota de dashboard//