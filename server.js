const forceSecure = require("force-secure-express")
const express = require("express")
const app = express()

app.use(forceSecure([
    "kikopt.herokuapp.com"
]));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`)
})
app.get("/home", (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`)
})

app.get("/minehut", (req, res) => {
    res.sendFile(`${__dirname}/views/minehut.html`)
})

app.get("/minehut/api", (req, res) => {
    res.sendFile(`${__dirname}/views/minehut/api.html`)
})


app.get("/minehut/api/json", (req, res) => {
    res.status(200).json(require(`./docs.json`))
})

app.listen(process.env.PORT || 80)

module.exports = app