# Sistema de Login

Sistema de autenticação completo (cadastro, login e proteção de rotas) construído do zero como projeto de estudo e portfólio.

## 🚀 Tecnologias

- **Node.js** + **Express** — servidor e rotas
- **SQLite** (better-sqlite3) — banco de dados
- **bcrypt** — hash de senhas
- **express-session** — controle de sessão
- **HTML, CSS e JavaScript puro** — front-end

## ✨ Funcionalidades

- Cadastro de usuário com validação de e-mail único
- Senhas armazenadas com hash (nunca em texto puro)
- Login com verificação de credenciais
- Sessão de usuário com cookie
- Middleware de proteção de rotas (acesso restrito a usuários autenticados)
- Tratamento de erros (e-mail duplicado, credenciais inválidas)

## 📦 Como rodar o projeto

\`\`\`bash
# Clone o repositório
git clone https://github.com/Joao-Gabriel-Lima/sistema-login-node.git

# Entre na pasta
cd sistema-login-node

# Instale as dependências
npm install

# Crie um arquivo .env na raiz com:
# SESSION_SECRET=sua-chave-secreta
# PORT=5000

# Rode o servidor
node server.js
\`\`\`

Acesse `http://localhost:5000/login.html` no navegador.

## 📚 O que aprendi com este projeto

- Como funciona autenticação por trás dos panos (hash vs criptografia, sessão vs token)
- Modelagem básica de banco de dados relacional
- Comunicação entre front-end e back-end via `fetch` e API REST
- Boas práticas de segurança (variáveis de ambiente, `.gitignore`, tratamento de erros)