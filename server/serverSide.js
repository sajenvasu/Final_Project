/*const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/Quiz";

mongoose.connect(url).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});*/

const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    gametag: String,
    password: String,
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel

const express = require("express")

const cors = require("cors")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}


const app = express()
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })
app.use(cookieParser())
app.use(cors(corsOptions));

mongoose.connect('mongodb://127.0.0.1:27017/employee');

const verifyLogin = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.json("Token is missing")
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if(err) {
                return res.json("Error with token")
            } else {
                if(decoded.role === "admin") {
                    next()
                } else {
                    return res.json("not admin")
                }
            }
        })
    }
}

app.get('/',verifyLogin ,(req, res) => {
    res.json("Success")
})

app.post('/Create', (req, res) => {
    const {gametag, password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        UserModel.create({gametag, password: hash})
        .then(user => res.json("Success"))
        .catch(err => res.json(err))
    }).catch(err => res.json(err))
})

app.post('/Login', (req, res) => {
    const {gametag, password} = req.body;
    UserModel.findOne({gametag: gametag})
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, (err, response) => {
                if(response) {
                  const token = jwt.sign({gametag: user.gametag, role: user.role},
                        "jwt-secret-key", {expiresIn: '1d'})  
                    res.cookie('token', token)
                    return res.json({Status: "Success", role: user.role})
                }else {
                    return res.json("The password is incorrect")
                }
            })
        } else {
            return res.json("No record exists. Create a new one")
        }
    })
})


app.listen(3001, () => {
    console.log("Server is Running")
})