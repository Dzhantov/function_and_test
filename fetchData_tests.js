const {fetchData} = require('./async_test_functions');

QUnit.module('fetch data function tests', ()=>{
    QUnit.test('fetch data from correct URL', async function(assert){
        const data = await fetchData('https://www.zippopotam.us/bg/8000');

        assert.ok(data.hasOwnProperty('post code'), 'checking for specific property');
        assert.equal(data['post code'], '8000');
        assert.ok(data.hasOwnProperty('country'), 'checking for specific property');
        assert.equal(data['country'], 'Bulgaria');
        assert.ok(data.hasOwnProperty('country abbreviation'), 'checking for specific property');
        assert.equal(data['country abbreviation'], 'BG');

        assert.ok(Array.isArray(data.places));
        assert.equal(data.places.length, 1);

        const place = data.places[0];
        
        assert.ok(place.hasOwnProperty('place name'), 'checking for specific property');
        assert.equal(place['place name'], 'Бургас / Burgas');

        assert.ok(place.hasOwnProperty('longitude'), 'checking for specific property');
        assert.equal(place['longitude'], '27.4667');

        assert.ok(place.hasOwnProperty('state'), 'checking for specific property');
        assert.equal(place['state'], 'Бургас / Burgas');

        assert.ok(place.hasOwnProperty('state abbreviation'), 'checking for specific property');
        assert.equal(place['state abbreviation'], 'BGS');

        assert.ok(place.hasOwnProperty('latitude'), 'checking for specific property');
        assert.equal(place['latitude'], '42.5');
        
    })

    QUnit.test('with invalid post code', ()=>{
        QUnit.test('with invalid post code', async function(assert){
            const data = await fetchData('https://www.zippopotam.us/bg/061651'); 

            assert.notOk(data);

        })
    })

    QUnit.test('with invalid URL', ()=>{
        QUnit.test('with invalid post code', async function(assert){
            const data = await fetchData('https://www.zippopodtam.us/bg/061651'); 

            assert.equal(data, 'fetch failed')
            
        })
    })
})