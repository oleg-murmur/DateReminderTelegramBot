import express from "express"
let app = express()

app.listen(5000)

app.use(express.static("./src"))