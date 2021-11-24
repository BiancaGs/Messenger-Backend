const { performance } = require("perf_hooks");

const axios = require("axios");

var start = performance.now();

let conversationId = "615d8965c0202898ed9e2b3e";
let searchString = "tudo";

axios.get(`http://localhost:5000/api/conversations/${conversationId}/search/${searchString}`).then((result) => {
    console.log(`Encontrou a palavra "${searchString}" em ${result.data.length} mensagens`);

    var end = performance.now();
    console.log(`Execution time: ${end - start} ms`);
});
