const express = require('express');
const app = express();

const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(routes.route);

app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000');
});