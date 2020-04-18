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
                    .select('*');

        return res.json(response);
    }
};
