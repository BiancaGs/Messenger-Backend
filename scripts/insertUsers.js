const { performance } = require('perf_hooks');

const User = require('../models/User');
const faker = require('faker');
const axios = require('axios');

let numberOfUsers = 100;
var start = performance.now();

for (let i = 0; i < numberOfUsers; i++) {

    axios.post('http://localhost:5000/api/users/register', {
        name: faker.name.findName(),
        username: faker.internet.userName() + Math.random()
    });

}
console.log('Number of Users Inserted ' + numberOfUsers);
var end = performance.now();
console.log(`Execution time: ${end - start} ms`);