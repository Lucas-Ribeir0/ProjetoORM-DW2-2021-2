const {Model, DataTypes} = require('sequelize');

class Montadoras extends Model {
    static init(sequelize) {
        super.init({
            mon_nome: DataTypes.STRING,
            mon_fantasia: DataTypes.STRING,
            mon_pais: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'MONTADORA'
        })
    }
}

module.exports = Montadoras