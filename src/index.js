const express = require("express");
const path = require("path");
const { PORT } = require("./constants.js");

//Initialize
const app = express();

//Express configurations
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));

//Routes
app.get('/', (req, res) => {
    res.send("Hello from home page!");
});

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}...`));