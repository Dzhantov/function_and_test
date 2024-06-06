const {isPalindrom} = require('./test_functions.js');

QUnit.module('isPalindrome function tests', ()=>{

    QUnit.test('Single palindrome word', function(assert){
        assert.ok(isPalindrom('racecar'), 'Single palindrome word')
    })

    QUnit.test('Multiple palindrome word', function(assert){
        assert.ok(isPalindrom('A man, a plan, a canal, Panama!'), 'Multiple palindrome word')
    })

    QUnit.test('not palindrome word', function(assert){
        assert.notOk(isPalindrom('hello'), 'not palindrome word')
    })

    QUnit.test('empty string as input', function(assert){
        assert.notOk(isPalindrom('hello'), 'empty string as input')
    })
})