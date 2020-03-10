const express = require("express")
const app = express()
app.listen(process.env.PORT || 80)

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`)
})
app.get("/home", (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`)
})

module.exports = app