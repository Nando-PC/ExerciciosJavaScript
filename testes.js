// Mocha Chai Sinon
// Argumentos Mocha
const assert = require('assert')
const Math = require('../src/math.js')


describe ('Teste matemático', function {
    it ('Somar 2 numeros', function {
        const math = new Math()

        assert.equal(math.sum(5,5), 10)

    })
})

//hooks = ferramentas que auxiliam na execução e evitar repetições
