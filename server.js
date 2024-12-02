const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para processar JSON
app.use(express.json());

// Dados simulados
const usuarios = [
  { nome: 'João Silva', email: 'joao@exemplo.com', dataNascimento: '1985-05-20' },
  { nome: 'Maria Oliveira', email: 'maria@exemplo.com', dataNascimento: '1990-08-15' }
];

// Rota GET: Retorna todos os usuários
app.get('/users', (req, res) => {
  res.json(usuarios);
});

// Rota POST: Adiciona um novo usuário
app.post('/users', (req, res) => {
  const novoUsuario = req.body;
  usuarios.push(novoUsuario);
  res.status(201).json({
    mensagem: 'Usuário criado com sucesso!',
    usuario: novoUsuario
  });
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
