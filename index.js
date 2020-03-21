const app = require("./server.js")
const fs = require("fs")

const docs = require("./docs.json")

const json = require("./docs.json")
fs.writeFile("./docs.json", JSON.stringify(json, null, "    "), err => {
    if (err) console.log(err)
})