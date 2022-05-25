import express from "express";
import fs from "fs";
import jwt from "jsonwebtoken";
import { notStrictEqual } from "assert";
import { create } from "domain";
import { Request, Response } from "express";
import{User} from "./Users"
import{Producer} from "./Producers"
import{Product} from "./Products"
import{ShoppingCart} from "./ShoppingCarts"



 const app = express();

  app.get('/', (req, res) => {
      res.send("Welcome");
    })

 app.listen(3000)
