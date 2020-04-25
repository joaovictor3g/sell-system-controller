const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const { name, pass } = req.body;

        const [id] = await connection('login')
                .where('name', name)
                .where('password', pass)
                .select('id');

        return res.json(id);
    },

    async newClient(req, res) {
        const { name, id_game, value, diamonds } = req.body;

        await connection('users').insert({
            name,
            id_game,
            value,
            diamonds 
        })

        return res.json({ message: 'deu certo :v' })
    },

    async listClients(req, res) {
        const response = await connection('users')
                .orderBy(['name'], {
                    column: 'name',
                    order: 'asc'
                });

        return res.json(response);
    },

    async deleteClient(req, res) {
        const { id } = req.params;

        await connection('users')
            .where('id', id)
            .del();
        
        return res.json({ message: 'All done' });
    }
};
