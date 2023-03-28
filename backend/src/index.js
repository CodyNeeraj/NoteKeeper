const connectToMongo = require("./DBconnection")
const express = require("express")

let cors = require("cors")

connectToMongo()
const app = express()
const port = 5000

// middlewares for running the json req,res and cross origin request
app.use(cors())
app.use(express.json())

// Available Routes
app.use("/api/auth", require("./routes/auth"))
app.use("/api/notes", require("./routes/notes"))

app.listen(port, () => {
    console.log(`NoteKeeper backend listening at http://localhost:${port}`)
})
