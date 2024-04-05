// app.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/submit-form', (req, res) => {
    const { name, email, phone, message } = req.body;
    console.log('Nome:', name);
    console.log('E-mail:', email);
    console.log('Telefone:', phone);
    console.log('Mensagem:', message);
    res.send('Dados do formulário recebidos com sucesso!');
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
