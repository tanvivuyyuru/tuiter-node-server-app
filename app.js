import express from 'express';
// const express = require('express')
import cors from 'cors';
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";
//mongoose.connect('mongodb://127.0.0.1:27017/tuiter);
const DB_CONNECTION_STRING='mongodb+srv://tanvireddyvuyyuru:<supersecretpassword>@cluster0.ponswo4.mongodb.net/?retryWrites=true&w=majority'
const CONNECTION_STRING = DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter'
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(express.json())
app.use(cors());
// app.get('/hello', (req, res) => {res.send('Life is good!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
TuitsController(app)
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000);