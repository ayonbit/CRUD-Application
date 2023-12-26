//Dependencies
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

//db connection
const connectDB = require("./server/database/connection");

//module
const app = express();

//env config
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//log request
app.use(morgan("tiny"));

//mongodb connection
connectDB();

//body parser
app.use(bodyparser.urlencoded({ extended: true }));

//app view engine
app.set("view engine", "ejs");
//app.search("views",path.resolve(__dirname,"views/ejs"));

//load assets path
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

//load routes
app.use("/", require("./server/routes/router"));

//server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
