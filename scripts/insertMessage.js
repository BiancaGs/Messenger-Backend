const { performance } = require('perf_hooks');

const User = require('../models/Conversation');
const faker = require('faker');
const axios = require('axios');

let numberOfMessage = 1;
var start = performance.now();

for (let i = 0; i < numberOfMessage; i++) {

    axios.post('http://localhost:5000/api/conversation/615d065bf49c478f67746e0e/new-message', {
        "from": "615bb50482bbd4783e13ede2",
        "body": faker.lorem.text()
    });

}

var end = performance.now();
console.log(`Execution time: ${end - start} ms`);