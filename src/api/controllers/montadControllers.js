const Montadoras = require('../models/montadModels.js')

module.exports = {
    async index(req, res){
        const montadoras = await Montadoras.findAll()
        return res.json(montadoras);
    },

    async store(req, res){
        const {mon_nome, mon_fantasia, mon_pais} = req.body;
        const montadora = await Montadoras.create({mon_nome, mon_fantasia, mon_pais});
        return res.status(200).send({
            status: 1,
            message: "Montadora cadastrada com sucesso!",
            montadora
        })
    },

    async update(req, res){
        const {mon_nome, mon_fantasia, mon_pais} = req.body;
        const {id} = req.params;

        await Montadoras.update({
            mon_nome, mon_fantasia, mon_pais
        }, { where: {
                id: id
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Informações da montadora atualizada com sucesso!"
        })
    },

    async delete(req, res){
        const {id} = req.params;

        await Montadoras.destroy({
            where: {
                id: id
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Montadora excluída com sucesso!"
        })
    }
}