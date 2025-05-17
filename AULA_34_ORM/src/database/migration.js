const Conexao = require('../config/conexao.js')
const UsuarioModel = require('../model/UsuarioModel.js')

Conexao.sync({ force: true });

// node migration.js