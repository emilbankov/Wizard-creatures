const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { auth } = require("./middlewares/authMiddleware.js");

const { PORT, URL } = require("./constants.js");
const routes = require("./router.js");

//Initialize
const app = express();

//Express configurations
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);

//Handlebars configuration
app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

// Database connection
async function dbConnect() {
    await mongoose.connect(URL);
}

dbConnect()
    .then(() => { console.log(`Successfully connected to the DB!`); })
    .catch(err => console.log(`Error while connecting to the DB. Error: ${err}`));

//Routes
app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}...`));