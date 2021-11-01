const express = require('express');  
//const routes = express.Router();
const routes = require('./routes')

const app = express();
require('./config/dbConfig'); //apto para connect dbMongo
app.use(express.json()); 
app.use(routes);

let porta = 3000;
app.listen(porta);
console.log('Sistema rodando na porta' + porta);