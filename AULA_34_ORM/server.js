const { createServer } = require('node:http')
const UsuarioModel = require('./src/model/UsuarioModel')

const app = createServer(async (request, response) => {
    // Servidor Gerenciado aqui
    const url = request.url
    const method = request.method

    if(url === '/usuarios' && method === 'GET') {
        const dados = await UsuarioModel.findAll();
        response.writeHead(200, { 'Content-type': 'application/json' })
        return response.end(JSON.stringify(dados))
    }

    if(url === '/usuarios' && method === 'POST') {
        const dados = {
            nome: 'Elmo',
            email: 'elmo@dc.com.br',
            senha: '123123'
        }
        await UsuarioModel.create(dados);
        const resultado = {
            message: 'Usuário criado com sucesso'
        }
        response.writeHead(200, { 'Content-type': 'application/json' })
        return response.end(JSON.stringify(resultado))
    }


    response.writeHead(404, { 'Content-type': 'text/plain' })
    response.end("Rota Nao Criada")
})

app.listen(3000, 'localhost', () => {
    console.log("Servidor executando...")
})