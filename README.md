# Sistema de Login

Sistema de autenticação completo (cadastro, login e proteção de rotas) construído do zero como projeto de estudo e portfólio, com back-end, banco de dados e front-end integrados.

🔗 **[Acesse o projeto no ar](https://sua-url.onrender.com/)**

## 🚀 Tecnologias

- **Node.js** + **Express** — servidor e rotas
- **SQLite** (better-sqlite3) — banco de dados
- **bcrypt** — hash de senhas
- **express-session** — controle de sessão
- **dotenv** — variáveis de ambiente
- **HTML, CSS e JavaScript puro** — front-end

## ✨ Funcionalidades

- Cadastro de usuário com validação de e-mail único
- Senhas armazenadas com hash (nunca em texto puro)
- Login com verificação de credenciais
- Sessão de usuário com cookie
- Middleware de proteção de rotas (acesso restrito a usuários autenticados)
- Tratamento de erros (e-mail duplicado, credenciais inválidas)
- Front-end conectado à API via `fetch`, sem recarregar a página
- Deploy publicado no Render

## 📦 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/Joao-Gabriel-Lima/login-node.git

# Entre na pasta
cd login-node

# Instale as dependências
npm install

# Crie um arquivo .env na raiz com:
# SESSION_SECRET=uma-string-longa-e-aleatoria
# PORT=5000

# Rode o servidor
node server.js
```

Acesse `http://localhost:5000` no navegador (a rota inicial já redireciona para a tela de login).

## ⚠️ Observação sobre o deploy

O projeto está hospedado no plano gratuito do Render, que não possui disco persistente. Isso significa que os dados cadastrados podem ser reiniciados periodicamente — comportamento esperado nesse ambiente de demonstração.

## 📚 O que aprendi com este projeto

- Como funciona autenticação por trás dos panos (hash vs criptografia, sessão vs token)
- Modelagem básica de banco de dados relacional com SQL puro
- Comunicação entre front-end e back-end via `fetch` e API REST
- Boas práticas de segurança (variáveis de ambiente, `.gitignore`, tratamento de erros)
- Organização de projeto Node.js (separação entre conexão de banco e rotas)