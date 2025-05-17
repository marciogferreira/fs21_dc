// CommonJS
// const NomeLib = require('nome_lib')
// Module
// import NomeLib from 'nome_lib'.
const { Sequelize } = require('sequelize');

const Conexao = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 1234,
    database: 'biblioteca_digital'
})

module.exports = Conexao;