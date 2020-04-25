const express = require('express');

const routes = express.Router();

const ClientController = require('./controllers/ClientController');

routes.post('/', ClientController.index);
routes.post('/new-client', ClientController.newClient);
routes.get('/list', ClientController.listClients);
routes.delete('/delete/:id', ClientController.deleteClient);

module.exports = routes;