const ModeloTabela = require('../rotas/fornecedores/ModeloTabelaFornecedor')

ModeloTabela
    .sync()
    .then(() => console.log('Tabela criada com sucessso'))
    .catch(console.log)