const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const db = require('./database.js');

app.post('/cadastrar', (req, res) => { 
    const {email, senha} = req.body; 
    db.run( 
      'INSERT INTO usuarios (email, senha) VALUES (?, ?)', 
      [email, senha], 
      (err) => { 
        if (err) return res.status(400).json({ error: err.message }); 
        res.json({ message: 'Usuário cadastrado!' }); 
      } 
    ); 
  }); 

  app.post('/atualizar', (req, res) => {
    const {email, senha} = req.body;
    db.run(
        'UPDATE usuarios SET senha = ? WHERE email = ?',
        [senha, email],
        (erro) => {
            if (err) return res.status(400).json ({ error: err.message});
            res.json({ message: 'Usuario atualizado'})
        }
    );
  });

  app.post('/excluir', (req, res) => { 
    const { email } = req.body; 
    db.run( 
      'DELETE FROM usuarios WHERE email = ?', 
      [nome], 
      (err) => { 
        if (err) return res.status(400).json({ error: err.message }); 
  res.json({ message: 'Usuário excluído!' }); 
  } 
  ); 
  });

  app.get('/usuarios', (req, res) => {
    db.all(
        'SELECT * FROM usuarios;',
        [],
        (err, rows) => {
            if(err) return res.status(400).json({ error: err.message});

            res.json(rows);
        }
    );
  });

  
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
