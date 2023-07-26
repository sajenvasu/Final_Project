const CollecedData = require("./AccDet")
const { default: mongoose } = require("mongoose");

const express = require("express");

const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Games");

app.post("/loginregister", (req,res) => {
    CollecedData.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server UP and RUNNING");
})
















// -----------------------------------

// const express = require("express");
// const mongoose = require("mongoose");

// const app = express()

// mongoose.connect("mongodb://localhost:27017/loginregister")

// app.listen(3001, () => {
//     console.log("SERVER RUNNING")
// })

// const UserSchema = mongoose.Schema({
//     gamerid: String,
//     password: String
// })

// const modl = mongoose.model("users", UserSchema)

// app.get("/getUsers", (req, res) => {
//     res.json(modl.find())
// })