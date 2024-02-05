const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const dotenv  = require("dotenv")
dotenv.config()

const app = express()
app.use(bodyParser.json());

app.use(cors())
app.use(bodyParser.json());

const db = require("./app/models")
db.sequelize.sync()
.then(()=>{
    console.log("sync db")
})
.catch((err)=>{
    console.log("failed to sync db",err.message)
})

const userRoute = require("./app/router/userRoutes")
app.use("/",userRoute)

app.get("/api", (req,res)=>{
    res.send("My Api")
})

app.listen(8880, ()=>{
    console.log("Server is running on port 8880")
})