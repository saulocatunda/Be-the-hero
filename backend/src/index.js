const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
// alterar com origin, pode definir qual endereço front-end se conectará.
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */
/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
  * Route Parms: Parâmetros ultilizados para identificar recursos
  * Request Body: Corpo da requisição, ultilizado para criar ou alterar recursos
  */

/**
   * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
   * NoSQL:MongoDB, CouchDB, etc.
   */

/**
    * Driver: SELECT + FROM users
    * Query Builder: table('users').select('*').where()
    */




