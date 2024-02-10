const express = require("express");
const path = require("path");

const app = express();

// register view engine
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.send("<h1>A Dynamic Website</h1><p>Random value: </p>" + Math.random());
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
