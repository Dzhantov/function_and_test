const {nthPrime} = require('./test_functions.js');

QUnit.module('nthPrime function tests', ()=>{
    QUnit.test('Input is 1', function(assert){
        assert.equal(nthPrime(1), 2, 'Input is 1')
    })

    QUnit.test('Input is 5', function(assert){
        assert.equal(nthPrime(5), 11, 'Input is 5')
    })

    QUnit.test('Input is 11', function(assert){
        assert.equal(nthPrime(11), 31, 'Input is 11')
    })
})