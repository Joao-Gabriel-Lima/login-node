const express = require('express')
const app = express()
const PORT = 5000

app.get('/', (req, res)=>{
    res.send("Servidor rodando")
})

app.listen(PORT, () => {
    console.log("servidor rodando na porta 5000")
})
