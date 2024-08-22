import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
  user:"postgres",
  password: "1234",
  database:"world",
  host: "localhost",
  port: 5432,
})

db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var conts=[];
var newConts=[];

async function checkVisited(){
  conts = await db.query("SELECT country_code FROM visited_countries")
  conts= conts.rows;
  console.log(conts);
  var conts2=[];
  conts.forEach(hehe=>{conts2.push(hehe.country_code)});
  return conts2;
}

db.query("SELECT * FROM countries", (err, res)=>{
  if (err){
    console.log("Errore hehe", err.stack);
  } else {
    newConts= res.rows;
  }
})

app.get("/", async (req, res) => {
  //Write your code here.
  var conts2 = checkVisited();
  console.log(conts2);
  res.render("index.ejs", {countries: conts2, total:conts2.length});
});

app.post("/add", (req, res)=>{
    var newCont=req.body.country;
    var newCont= newCont.trim().toLowerCase();
    var foundCont= newConts.find(name=> name.country_name.trim().toLowerCase()===newCont);
    var contCo= foundCont.country_code;
    console.log(contCo);
    var querr= `INSERT INTO visited_countries (country_code) VALUES ('${contCo}')`;
    db.query(querr, (err, res)=>{
      if (err){
        console.log("Erhe", err.stack);
      } else {
        console.log("Visited Countries DB Appended successfully");
      }
    });
    res.redirect("/");
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
