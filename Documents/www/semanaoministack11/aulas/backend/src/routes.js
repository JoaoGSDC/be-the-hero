const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;

/*
    /// Métodos HTTP ////

    GET: BUSCAR informação do back-end
    POST: CRIAR uma informação no back-end
    PUT: ALTERAR uma informação no back-end
    DELETE: DELETAR uma informação no back-end
*/

/*
    /// TIPOS DE PARÂMETROS ///

    QUERY PARAMS: Parâmetros nomeados enviados na rota após o simbolo de '?' (FILTROS, PAGINAÇÃO)
    ROUTE PARAMS: Parâmetros utilizados para identificar recursos
    REQUEST BODY: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
    SQL: MySQL, POSTGRESQL, SQLite, Oracle
    NoSQL: MongoDB, CouchDB, etc
*/

/*
    Driver: SELECT * FROM users
    Query Builder: table('users').select('*').where()
*/