const {isEven} = require('./test_functions.js');

QUnit.module('isEven Function tests', ()=>{

    QUnit.test('Even numbers', function(assert){
        assert.ok(isEven(2), 'Even number passed');
    })

    QUnit.test('Odd numbers', function(assert){
        assert.notOk(isEven(3), 'Odd number passed');
    })

    QUnit.test('0 as input', function(assert){
        assert.ok(isEven(0), '0 as input');
    })

    QUnit.test('negative numbers', function(assert){
        assert.ok(isEven(-2), 'Negative number');
    })
    QUnit.test('empty input', function(assert){
        assert.notOk(isEven(), 'empty input');
    })
})