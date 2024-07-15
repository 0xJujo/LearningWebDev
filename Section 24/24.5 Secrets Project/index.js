//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import {fileURLToPath} from "url";
import { dirname } from "path";

var pass;

const __dirname=dirname(fileURLToPath(import.meta.url));
const app= express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/public/index.html");
});

app.post("/check",(req, res)=>{
    pass=req.body;
    console.log(pass);
    if(pass=="ILoveProgramming"){
        // res.sendFile(__dirname+"/public/secret.html");
        console.log("yess");
    } else {
        // res.sendFile(__dirname+"/public/index.html");
        console.log("noo");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
  