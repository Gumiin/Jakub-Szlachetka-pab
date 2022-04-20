import express from "express";
import fs from "fs";
import jwt from "jsonwebtoken";
import {Note} from "./Note";
import { NoteKeeper} from "./NoteKeeper";
import noteKeeper from "./NoteKeeper";
import {Tags} from "./Tag";
import {User} from "./User";
import { notStrictEqual } from "assert";
import { create } from "domain";
import { Request, Response } from "express";



const app = express()
const users:User[] = []
app.use(express.json());

noteKeeper.Users =[
  new User("Test","Q@werty"),
  new User("Test2","Q@werty"),
  new User("Test3","Q@werty"),
]

app.post("/Login",(req:Request, res:Response) => {
  console.log(`login ${req.body.userLogin}`)
  console.log(`login ${req.body.password}`)

  const loginId = noteKeeper.Users.findIndex((x)=>x.userLogin == req.body.userLogin)
  console.log(loginId)
  if(noteKeeper.Users.[loginId].password == req.body.password){
    noteKeeper.Users[loginId].setToken(jwt.sign({userLogi:req.body.userLogin,password:req.body.password},"nwmctsdijkppd"))
    console.log(noteKeeper.Users[loginId])
    res.sendStatus(200);
  }
  else{
    res.sendStatus(401);
  }
})

app.get("/note/:id", (req: Request, res: Response) => {
  const authData = req.headers.Authorization
  console.log(authData);
  res.send(noteKeeper.GET("note",+req.params.id,authData));
});
app.post("/note",(req: Request, res: Response) =>{
  const authData = req.headers.Authorization
  res.send(noteKeeper.POST(req.body,authData));
});
app.put("/note/:id", (req: Request, res: Response) =>{
  const authData = req.headers.Authorization
  res.send(noteKeeper.PUT(req.body,+req.params.id,authData));
});
app.delete("/note/:id", (req: Request, res: Response) =>{
  const authData = req.headers.Authorization
  res.send(`Chosen object was deleted at ${noteKeeper.DELETE("notes",+req.params.id,authData)}`);
});


app.get("/notes", (req: Request, res: Response) =>{
  res.send(noteKeeper.notes);
})

app.get("/tags/:id", (req: Request, res: Response) =>{
  const authData = req.headers.Authorization
  let addedObject = new Tags(req.body.name);
  //noteKeeper.POST(addedObject);
  res.send(`Your tag was created at ${addedObject.id,authData}`);
});

app.delete("/tag/:id", (req: Request, res: Response) =>{
  const authData = req.headers.Authorization
  res.send(noteKeeper.PUT(req.body,req.params.id,authData));
});

app.get("tags", (req: Request, res: Response) =>{
  res.send(noteKeeper.getTagsList());
});




app.get('/', function (req, res) {
  res.send('Hello World')
})

console.log("App started")
app.listen(3000)