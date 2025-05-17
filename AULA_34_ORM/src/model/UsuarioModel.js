const { DataTypes } = require('sequelize')
const Conexao = require('../config/conexao.js')

const UsuarioModel = Conexao.define(
    "UsuarioModel", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ativo: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, 
    {
        tableName: 'usuarios'
    }
)

module.exports = UsuarioModel;