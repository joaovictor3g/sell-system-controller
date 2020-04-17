const express = require('express');

const routes = express.Router();

const ClientController = require('./controllers/ClientController');

routes.get('/', ClientController.index);
routes.post('/new-client', ClientController.newClient);
routes.get('/list', ClientController.listClients);

module.exports = routes;