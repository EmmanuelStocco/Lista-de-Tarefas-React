const express = require('express');   
const routes = require('./routes');
const cors = require('cors');


const app = express();
require('./config/dbConfig'); //apto para connect dbMongo

app.use(cors());
app.use(express.json()); 
app.use(routes);

let porta = 8080;
app.listen(porta);
console.log('Sistema rodando na porta ' + porta);