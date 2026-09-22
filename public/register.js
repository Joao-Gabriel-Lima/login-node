const referencia = document.getElementById('botao1')
.addEventListener('click', function(event){
    const nome = document.querySelector('#nome').value
    const email = document.querySelector("#email").value
    const senha = document.querySelector("#senha").value
    fetch('/register', {method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({nome: nome, email: email, senha: senha})
    })
    .then(resposta => resposta.json())
    .then(dados =>{
        if(dados.erro){
            const divErro = document.getElementById('mensagem-erro')
            divErro.textContent = dados.erro
        }else{
            window.location.href = '/login.html'
        }
    })
})