const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.use("/", express.static(path.join(__dirname, "html")));
app.use("/produkte", express.static(path.join(__dirname, "beispiel-assets")));

app.listen(8080, () => console.log("listening"));