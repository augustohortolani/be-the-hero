const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
Métodos HTTP

GET: Busca
POST: Cria
PUT: Altera
DELETE: Exclui

*/

app.listen(3333);