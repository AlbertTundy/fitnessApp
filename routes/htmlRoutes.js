const app = require('express').Router()
const path = require('path')



app.get("/exercise", (rec, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})
app.get("/", (rec, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

app.get("/stats", (rec, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})

module.exports = app
