const express = require('express');
const app = express();

// para ter acesso ao request.body
app.use(express.urlencoded({ extended: true }));

app.get('/', function(request, response) {
  response.send('Hello my friendzas');
});

app.post('/', function(request, response) {
  response.send(request.body.name);
});

app.get('/test/', function(request, response) {
  response.send(`<form action="/" method="POST">
    <input name="name">
    <button type="submit">Enviar</button>
  </form>`);
});

app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000');
});