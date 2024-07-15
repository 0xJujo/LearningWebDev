import express from "express";
import { dirname } from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";

var a;

const __dirname=dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
  res.sendFile(__dirname+"/public/index.html");
})

app.post("/submit", (req, res)=>{
  a=req.body.street+req.body.pet+"🗿";
  res.send(`<h1>Your band name is:</h1><h2>${a}</h2>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
