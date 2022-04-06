import express from "express"
import fs from "fs";
import jwt from "jsonwebtoken"
import {Note} from "./Note"
import {Tags} from "./Tags"
import {User} from "./User"



const app = express()


app.get('/', function (req, res) {
  res.send('Hello World')
})
app.listen(3000)