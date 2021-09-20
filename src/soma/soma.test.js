const {getSoma} = require('./soma');
const { expect } = require("@jest/globals");

// no primeiro parametro da função 'test' temos a descrição do teste
// depois temos criamos uma função onde faremos o teste
// no caso testamos se 'getSoma' é uma função
test('getSoma should be a function', ()=>{
    expect(getSoma).toBeInstanceOf(Function)
})

// aqui testamos o retorno de 'getSoma'
// o valor de 'actual' é o atual retorno de 'getSoma'
// o valor de 'expected' é o retorno esperado, caso não batam
// o teste irá estourar um erro
test('getSoma must return 5', ()=>{
    const [actual, expected] = [getSoma(3,5), 8]
    expect(actual).toBe(expected)
})