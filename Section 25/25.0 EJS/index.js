import express from "express";

const app= express();
const port= 3000;

const d = new Date();
let day = d.getDay();

app.set('view engine', 'ejs');

// // Example route handler
// app.get('/', (req, res) => {
//     res.render('index', {day: day}); // Express will look for views/index.ejs
// });

app.get("/", (req, res)=>{
    res.render('index', {day: day});
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}.`);
});