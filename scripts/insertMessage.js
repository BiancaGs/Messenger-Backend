const { performance } = require("perf_hooks");

const User = require("../models/Conversation");
const faker = require("faker");
const axios = require("axios");

let numberOfMessage = 20;
var start = performance.now();

for (let i = 0; i < numberOfMessage; i++) {
    axios.post("http://localhost:5000/api/conversations/615d8965c0202898ed9e2b3e/new-message", {
        from: "615d8832c0202898ed9e2b3b",
        body: faker.lorem.text(),
    });
}

var end = performance.now();
console.log(`Execution time: ${end - start} ms`);
