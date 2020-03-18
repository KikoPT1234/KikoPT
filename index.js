const app = require("./server.js")
const fs = require("fs")

const docs = require("./docs.json")
const newDocs = {}
for (let i in docs) {
    if (!docs[i].endpoint.startsWith("https://api.minehut.com/admin")) newDocs[i] = docs[i]
}
console.log(newDocs)