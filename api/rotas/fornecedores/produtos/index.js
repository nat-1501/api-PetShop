const roteador = require('express').Router ()

roteador.get('/', (requisicao, respostas) => {
    resposta.send(
        JSON.stringify([])
    )
})

module.exports = roteador