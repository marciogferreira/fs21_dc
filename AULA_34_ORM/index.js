const UsuarioModel = require('./src/model/UsuarioModel.js')
async function criarUsuario() {
    const dados = {
        nome: 'admin',
        email: 'admin@admin.com.br',
        senha: '123123',
        ativo: true
    }
    const resultado = await UsuarioModel.create(dados)
    // UsuarioModel.update()
    // UsuarioModel.findAll()
    // UsuarioModel.destroy()
    console.log(resultado)
}

async function atualizarUsuario() {
    const dados = {
        nome: 'Administrador',
        email: 'admin@admin.com.br',
        senha: '123456',
        ativo: true
    }
    await UsuarioModel.update(
        dados, 
        { 
            where: { 
                id: 1 
            } 
        }
    )
}
atualizarUsuario()
