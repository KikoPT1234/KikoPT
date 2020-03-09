const express = require("express")
const app = express()
app.listen(process.env.PORT || 80)

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`)
})

module.exports = app