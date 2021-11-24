const { performance } = require("perf_hooks");

const User = require("../models/Conversation");
const faker = require("faker");
const axios = require("axios");

var start = performance.now();

let numberOfMessage = 20;
let conversationId = "615d8965c0202898ed9e2b3e";

let axiosCalls = [];

for (let i = 0; i < numberOfMessage; i++) {
    axiosCalls.push(
        axios.post(`http://localhost:5000/api/conversations/${conversationId}/new-message`, {
            from: "615d8841c0202898ed9e2b3c",
            body: faker.lorem.text(),
        })
    );
}

axios.all(axiosCalls).then(() => {
    var end = performance.now();
    console.log(`Execution time: ${end - start} ms`);
});
