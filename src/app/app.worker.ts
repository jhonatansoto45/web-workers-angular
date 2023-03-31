/// <reference lib="webworker" />

import { factorialCalculator } from "./factorial.function";

addEventListener('message', ({ data }) => {

setInterval(() => {
console.log(data += 1);
const response = factorialCalculator(data);
postMessage(response);
}, 1000)
});
