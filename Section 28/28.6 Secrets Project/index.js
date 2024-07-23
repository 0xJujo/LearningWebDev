// HINTS:
// 1. Import express and axios

import axios from "axios";
import express from "express";

// 2. Create an express app and set the port number.

const port= 3000;
const app= express();

// 3. Use the public folder for static files.

app.use(express.static("public"));

// 4. When the user goes to the home page it should render the index.ejs file.

app.get("/", async (req, res) =>{
    try {
        const result = await axios.get( "https://secrets-api.appbrewery.com/random");
        // const response= JSON.stringify(result.data);
        const response= result.data;
        res.render("index.ejs", {secret:response.secret, user:response.username});
      } catch (error) {
        res.render("index.ejs", {secret:error, user:"NA"});
      }
})

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})