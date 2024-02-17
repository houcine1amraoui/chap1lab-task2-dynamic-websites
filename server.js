const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.resolve(__dirname, "static")));

// register view engine
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.send("<h1>Here is a random value: </h1>" + Math.random());
});

app.get("/profile", (req, res) => {
  res.render("profile", {
    name: req.query.name,
  });
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "static", "contact.html"));
});

const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
